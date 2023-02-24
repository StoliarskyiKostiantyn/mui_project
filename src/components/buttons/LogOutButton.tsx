import {useAuth0} from '@auth0/auth0-react';
import Button from '@mui/material/Button';

export const LogOutButton = () => {
  const {logout} = useAuth0();

  return (
    <Button
      type="submit"
      variant="contained"
      sx={{mt: 3, mb: 2}}
      onClick={() => {
        logout();
        console.log(window.location.origin);
      }}>
      Log Out
    </Button>
  );
};
