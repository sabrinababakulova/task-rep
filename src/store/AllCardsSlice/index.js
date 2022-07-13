import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    allCards: [],
    checkedCard: {},
}

export const AllCardsSlice = createSlice({
    name: 'AllCardsSlice',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.allCards = action.payload
        },
    },
})

export const { addCards, } = AllCardsSlice.actions
export default AllCardsSlice.reducer
