import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <p>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <NavLink to="/signup">Registration</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </div>
  );
};

export default AuthNav;
