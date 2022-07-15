import { createSlice } from '@reduxjs/toolkit'
import { fetchedCardData } from '../../components/DataFetching'
const allCards = [
    {
        body: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        header: 'Bulbasaur',
        id: '001',
    },
]
const initialState = {
    cards: [],
    checkedCard: {},
    numberOfCards: 0,
}

export const allCardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setAllCardsData: (state) => {
            state.cards = [...fetchedCardData]
            state.numberOfCards = state.cards.length
        },
        addCard: (state, action) => {
            state.cards = [...state.cards, action.payload]
            state.numberOfCards++
        },
        removeCard: (state, action) => {
            action.payload.forEach((id) => {
                state.cards = state.cards.filter((card) => card.id !== id)
            })
            state.numberOfCards = state.cards.length
        },
        editCard: (state, action) => {
            const { id, header, body } = action.payload
            const cardIndex = state.cards.findIndex((card) => card.id === id)
            state.cards[cardIndex] = { body, header, id }
        },
        checkCard: (state, action) => {
            state.checkedCard = action.payload
        },
    },
})

export const { setAllCardsData, addCard, removeCard, editCard, checkCard } =
    allCardsSlice.actions
export default allCardsSlice.reducer
