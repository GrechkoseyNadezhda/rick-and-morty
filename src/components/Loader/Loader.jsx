import React from 'react';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <span className={css.loader}></span>
    </div>
  );
};
