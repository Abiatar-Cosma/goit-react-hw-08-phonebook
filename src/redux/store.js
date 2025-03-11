import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './Slices/contactsSlice';
import filterReducer from './Slices/filterSlice';
import authReducer from './Slices/authSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);