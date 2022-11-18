import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}

