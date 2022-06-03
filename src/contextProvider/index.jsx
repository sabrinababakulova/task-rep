import React, { useContext, useState } from 'react'
import cardData from '../data/CardData.json'
import PropTypes from 'prop-types'


const cardDataContext = React.createContext()

export const CardDataProvider = ({ children }) => {
    // no setAllCards because it renders while mainpage is rendering
    const [allCards] = useState(cardData)
    const [checkedCard, setCheckedCard] = useState({})
    const value = {
        allCards,
        getNumberOfCards: () => allCards.length,
        addCard: (cardCreated) => {
            allCards.push(cardCreated)
        },
        removeCard: (cardIds) => {
            cardIds.forEach((id) => {
                const cardIndex = allCards.findIndex(
                    (card) => card.id === id
                )
                allCards.splice(cardIndex, 1)
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

CardDataProvider.propTypes={
    children: PropTypes.node.isRequired,
}
export const useCardData = () => useContext(cardDataContext)
