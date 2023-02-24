import {useAuth0} from '@auth0/auth0-react';
import {Button} from '@mui/material';

export const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <Button
      type="submit"
      variant="contained"
      sx={{mt: 3, mb: 2}}
      onClick={() => {
        loginWithRedirect();
        console.log(window.location.origin);
      }}>
      Log In
    </Button>
  );
};
