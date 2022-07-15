import { configureStore } from '@reduxjs/toolkit'
import allCardsReducer from './AllCardsSlice'

export const store = configureStore({
    reducer: {
        cards: allCardsReducer,
    },
})
