import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { recipesApi } from './recipesSlice';
import { userReducer } from './userSlice';
import { myRecipesApi } from './myRecipesSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
  [myRecipesApi.reducerPath]: myRecipesApi.reducer,
  user: persistReducer(persistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(recipesApi.middleware)
      .concat(myRecipesApi.middleware),
});

export const persistor = persistStore(store);
