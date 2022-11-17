import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <button type="button" className={css.logout} onClick={handleLogOut}>
        Logout
      </button>
      <p className={css.username}>Welcome, {user.name}</p>
      <p className={css.email}>{user.email}</p>
    </div>
  );
};

export default UserMenu;
