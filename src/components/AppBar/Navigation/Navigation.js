import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const activeLink = ({ isActive }) =>
    isActive ? `${css.link} ${css.activeLink}` : css.link;

  return (
    <nav>
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <div>
          {/* <NavLink to="/" className={activeLink}>
            Home
          </NavLink> */}

          <NavLink to="/contacts" className={activeLink}>
            Contacts
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
