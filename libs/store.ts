import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from './slice';
import thunk from 'redux-thunk'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    authenticated: persistAuth,
  },
  middleware: [
    ...getDefaultMiddleware({
        serializableCheck: false
    }),
    thunk,
],
});

export const persistor = persistStore(store);
