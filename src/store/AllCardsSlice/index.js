import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getData } from '../../components/DataFetching'

const initialState = {
  cards: [],
  checkedCards: [],
  numberOfCards: 0,
  isReadOnly: false,
  status: null,
}

export const fetchData = createAsyncThunk('cards/fetchData', async () => {
  return getData().then((userData) => {
    return userData
  })
})

export const allCardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setIsReadOnly: (state) => {
      state.isReadOnly = !state.isReadOnly
    },
    addCard: (state, action) => {
      state.cards = [...state.cards, action.payload]
      state.numberOfCards++
    },
    removeCard: (state) => {
      state.cards = state.cards.filter(
        (card) => !state.checkedCards.includes(card.id)
      )
      state.checkedCards = []
      state.numberOfCards = state.cards.length
    },
    editCard: (state, action) => {
      const { id, header, body } = action.payload
      const cardIndex = state.cards.findIndex((card) => card.id === id)
      state.cards[cardIndex] = { body, header, id }
    },
    checkCard: (state, action) => {
      state.checkedCards = [...state.checkedCards, action.payload]
    },
    unCheckCard: (state, action) => {
      state.checkedCards = state.checkedCards.filter(
        (card) => card.card !== action.payload.card
      )
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = 'success'
      state.cards = action.payload
      state.numberOfCards = state.cards.length
    },
    [fetchData.rejected]: (state) => {
      state.status = 'error'
    },
  },
})

export const {
  unCheckCard,
  addCard,
  removeCard,
  editCard,
  checkCard,
  setIsReadOnly,
} = allCardsSlice.actions
export default allCardsSlice.reducer
