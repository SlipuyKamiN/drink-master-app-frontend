import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { recipesApi } from './recipesSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});
