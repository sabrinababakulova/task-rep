import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../api/DataFetching';

const initialState = {
  cardsCollection: [],
  checkedCards: [],
  isReadOnly: localStorage.getItem('readOnly') || false,
  status: null,
};

export const fetchData = createAsyncThunk('allCardsInfo/fetchData', async () =>
  getData()
);

export const allCardsSlice = createSlice({
  name: 'allCardsInfo',
  initialState,
  reducers: {
    setIsReadOnly: (state) => {
      state.isReadOnly = !state.isReadOnly;
    },
    addCard: (state, action) => {
      state.cardsCollection = [...state.cardsCollection, action.payload];
    },
    removeCard: (state) => {
      state.cardsCollection = state.cardsCollection.filter(
        (card) => !state.checkedCards.includes(card.id)
      );
      state.checkedCards = [];
    },
    editCard: (state, action) => {
      const { id, header, body } = action.payload;
      const cardIndex = state.cardsCollection.findIndex(
        (card) => card.id === id
      );
      state.cardsCollection[cardIndex] = { body, header, id };
    },
    checkCard: (state, action) => {
      state.checkedCards = [...state.checkedCards, action.payload];
    },
    unCheckCard: (state, action) => {
      state.checkedCards = state.checkedCards.filter(
        (card) => card.card !== action.payload.card
      );
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.cardsCollection = action.payload;
    },
    [fetchData.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export const {
  unCheckCard,
  addCard,
  removeCard,
  editCard,
  checkCard,
  setIsReadOnly,
} = allCardsSlice.actions;
export default allCardsSlice.reducer;
