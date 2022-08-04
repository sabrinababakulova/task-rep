import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from './AllCardsSlice';
import userReducer from './UserSlide';
import logger from 'redux-logger';

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state.user);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
};
const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};
export const store = configureStore({
  reducer: {
    allCardsInfo: allCardsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: {
    user: loadFromLocalStorage(),
  },
});

store.subscribe(() => saveToLocalStorage(store.getState()));
