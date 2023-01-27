import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
// });
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

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
import { authReducer } from './authSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware,
});

export const persistor = persistStore(store);

// function getDefaultMiddleware<S = any>(
//   options: GetDefaultMiddlewareOptions = {}
// ): Middleware<{}, S>[]
