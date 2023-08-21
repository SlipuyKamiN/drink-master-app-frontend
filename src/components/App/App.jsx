import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/404Page';
import AddRecipePage from 'pages/AddRecipePage';
import DrinksPage from 'pages/DrinksPage';
import FavoritePage from 'pages/FavoritePage';
import MainPage from 'pages/MainPage';
import MyRecipesPage from 'pages/MyRecipesPage';
import RecipePage from 'pages/RecipePage';
import SigninPage from 'pages/SigninPage';
import SignupPage from 'pages/SignupPage';
import WelcomePage from 'pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/Signin" element={<SigninPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="/drinks/:categoryName" element={<DrinksPage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/my" element={<MyRecipesPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        {/* <Route
          path="register"
          element={<RestrictedRoute component={Register} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} />}
        /> */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
