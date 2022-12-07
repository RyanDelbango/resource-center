import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    authenticated: persistAuth,
  },
});

export const persistor = persistStore(store);
