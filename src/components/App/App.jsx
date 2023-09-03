import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import WelcomePage from 'pages/WelcomePage';
import SigninPage from 'pages/SigninPage';
import SignupPage from 'pages/SignupPage';
import MainPage from 'pages/MainPage';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useCurrentUserQuery } from 'redux/authSlice';
import { getUserState } from 'redux/userSelectors';
import LoadingSpinner from 'components/Shared/LoadingSpinner';
const ErrorPage = lazy(() => import('pages/404Page'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage'));
const DrinksPage = lazy(() => import('pages/DrinksPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const RecipePage = lazy(() => import('pages/RecipePage'));

const App = () => {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { isLoading } = useCurrentUserQuery('', { skip });

  if (isLoading) return <LoadingSpinner size={150} />;

  return (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={<RestrictedRoute component={WelcomePage} />}
        />
        <Route
          path="/signup"
          element={<RestrictedRoute component={SignupPage} />}
        />
        <Route
          path="/signin"
          element={<RestrictedRoute component={SigninPage} />}
        />
        <Route path="/" element={<PrivateRoute component={SharedLayout} />}>
          <Route index element={<MainPage />} />{' '}
          <Route path="/drinks/" element={<Navigate to={'/drinks/all'} />} />
          <Route path="/drinks/:categoryName" element={<DrinksPage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
