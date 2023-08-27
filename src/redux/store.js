import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { recipesApi } from './recipesSlice';
import { userReducer } from './userSlice';
import { myRecipesApi } from './myRecipesSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
  [myRecipesApi.reducerPath]: myRecipesApi.reducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(recipesApi.middleware)
      .concat(myRecipesApi.middleware),
});
