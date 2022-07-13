import { configureStore } from '@reduxjs/toolkit'
import allCardsReducer from './AllCardsSlice'
console.log(allCardsReducer)
export const store = configureStore({
    reducer: {
        cards: allCardsReducer,
    },
})
