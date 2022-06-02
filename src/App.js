import MainPage from './pages/MainPage'
import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import cardData from './data/CardData.json'
import PropTypes from 'prop-types'

const cardDataContext = React.createContext()

const CardDataProvider = ({ children }) => {
    const [checkedCard, setCheckedCard] = React.useState({})
    const value = {
        dataDisplay: cardData,
        setDataDisplay: () => {},
        addCard: (cardCreated) => {
            cardData.push(cardCreated)
        },
        removeCard: (cardIds) => {
            cardIds.forEach((id) => {
                const cardIndex = cardData.findIndex((card) => card.id === id)
                cardData.splice(cardIndex, 1)
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
                <MainPage cardData={cardData} />
            </Box>
        </CardDataProvider>
    )
}

App.propTypes = {
    cardData: PropTypes.array,
}

export default App
