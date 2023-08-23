import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { cocktailsApi } from './cocktailsSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [cocktailsApi.reducerPath]: cocktailsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(cocktailsApi.middleware),
});
