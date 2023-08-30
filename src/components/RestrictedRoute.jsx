import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserState } from 'redux/userSelectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(getUserState);

  return !isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
