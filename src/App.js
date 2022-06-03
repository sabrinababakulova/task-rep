import MainPage from './pages/MainPage'
import { Box } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import cardData from './data/CardData.json'

const cardDataContext = React.createContext()

export const CardDataProvider = ({ children }) => {
    const [dataToDisplay] = useState(cardData)
    const [checkedCard, setCheckedCard] = useState({})
    const value = {
        dataToDisplay,
        getNumberOfCards: () => dataToDisplay.length,
        addCard: (cardCreated) => {
            dataToDisplay.push(cardCreated)
        },
        removeCard: (cardIds) => {
            cardIds.forEach((id) => {
                const cardIndex = dataToDisplay.findIndex(
                    (card) => card.id === id
                )
                dataToDisplay.splice(cardIndex, 1)
            })
        },
        checkedCard,
        setCheckedCard: (card) => {
            setCheckedCard(card)
        },
    }
    return (
        <cardDataContext.Provider value={value}>
            {children}
        </cardDataContext.Provider>
    )
}

export const useCardData = () => useContext(cardDataContext)

const App = () => {
    return (
        <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
            <MainPage />
        </Box>
    )
}

export default App
