import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  const activeLink = ({ isActive }) =>
    isActive ? `${css.link} ${css.activeLink}` : css.link;

  return (
    <div>
      <NavLink to="/register" className={activeLink}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={activeLink}>
        Sign In
      </NavLink>
    </div>
  );
}
