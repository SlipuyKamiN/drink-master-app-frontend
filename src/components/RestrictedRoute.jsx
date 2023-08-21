import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = false;
  const isAllowed = !isLoggedIn;

  return isAllowed ? <Component /> : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
