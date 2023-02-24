import {useAuth0} from '@auth0/auth0-react';
import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {LoginButton} from '../buttons/LoginButton';
import {LogOutButton} from '../buttons/LogOutButton';
import {ThemeToggle} from '../ThemeToggle/ThemeToggle';
import styles from './Layout.module.css';

export const Layout = () => {
  useEffect(() => {
    document.title = 'MUI_Project';
  }, []);
  const {user, isAuthenticated, isLoading} = useAuth0();

  return (
    <>
      <header className={styles.header}>
        <h1>THIS IS HEADER</h1>
        <div className={styles.buttons}>
          <ThemeToggle />
          {user && isAuthenticated && !isLoading && <LogOutButton />}
          {!user && !isAuthenticated && !isLoading && <LoginButton />}
        </div>
      </header>
      <Outlet />
      <footer className={styles.footer}>
        <h2>THIS IS FOOTER</h2>
      </footer>
    </>
  );
};
