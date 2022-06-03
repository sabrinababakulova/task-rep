import MainPage from './pages/MainPage'
import { Box } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import cardData from './data/CardData.json'

const cardDataContext = React.createContext()

const CardDataProvider = ({ children }) => {
    const [dataDisplay] = useState(cardData)
    const [checkedCard, setCheckedCard] = useState({})
    const [numberOfCards, setNumberOfCards] = useState(dataDisplay.length)
    const value = {
        dataDisplay,
        numberOfCards,
        setNumberOfCards,
        addCard: (cardCreated) => {
            dataDisplay.push(cardCreated)
        },
        removeCard: (cardIds) => {
            cardIds.forEach((id) => {
                const cardIndex = dataDisplay.findIndex(
                    (card) => card.id === id
                )
                dataDisplay.splice(cardIndex, 1)
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
        <CardDataProvider>
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
                <MainPage />
            </Box>
        </CardDataProvider>
    )
}

export default App
