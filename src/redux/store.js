import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlices';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
