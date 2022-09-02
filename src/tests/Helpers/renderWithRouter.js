import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import allCardsReducer from '../../store/AllCardsSlice';
import userReducer from '../../store/UserSlide';

export const renderWithRouter = (
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        allCardsInfo: allCardsReducer,
        user: userReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const wrapper = ({ children }) => (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
  return render(ui, { wrapper, ...renderOptions });
};
