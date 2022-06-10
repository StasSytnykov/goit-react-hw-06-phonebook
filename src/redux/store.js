import { configureStore } from '@reduxjs/toolkit';
import appReducer from './contacts/contactsSlice';

export const store = configureStore({
  reducer: appReducer,
});
