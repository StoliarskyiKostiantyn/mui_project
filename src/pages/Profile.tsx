import {useState, useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';

export const Profile = () => {
  const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-1kbyy0s8udzfuzc3.us.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        });
        setToken(accessToken);
        console.log({accessToken});
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const {user_metadata} = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  if (!isAuthenticated || !user)
    return (
      <>
        <p>NOTHING</p>
      </>
    );
  console.log({token});
  return (
    isAuthenticated &&
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          'No user metadata defined'
        )}
      </div>
    )
  );
};
