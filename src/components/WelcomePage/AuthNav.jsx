import React from 'react';
import { NavLink } from 'react-router-dom';
import scss from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <div className={scss.div}>
      <p className={scss.description}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <div>
        <NavLink className={`${scss.btn} ${scss.btnWhite}`} to="/signup">
          Registration
        </NavLink>
        <NavLink className={scss.btn} to="/signin">
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
