import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ColorModeContext} from '../../utils/context';

interface Props {
  children: React.ReactNode;
}

export const AppWrapper = ({children}: Props) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Auth0Provider
          domain="dev-1kbyy0s8udzfuzc3.us.auth0.com"
          clientId="6pjbypRB8YJ03WjiAEkVTXfHpDFzSjEx"
          authorizationParams={{
            redirect_uri: 'https://kostiasite.netlify.app/dashboard',
          }}>
          <BrowserRouter>{children}</BrowserRouter>
        </Auth0Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
