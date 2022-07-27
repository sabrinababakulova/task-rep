import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from './AllCardsSlice';
import logger from 'redux-logger';
export const store = configureStore({
  reducer: {
    allCardsInfo: allCardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
