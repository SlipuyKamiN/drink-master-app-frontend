import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/welcome' }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = true;

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
