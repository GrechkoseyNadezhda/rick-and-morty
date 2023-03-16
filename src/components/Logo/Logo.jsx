import React from 'react';
import logo from 'images/logo.png';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <img src={logo} alt="logo" />
    </div>
  );
};
