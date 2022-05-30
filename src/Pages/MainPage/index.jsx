import React, { useState, useEffect } from 'react'
import Header from '../../сomponents/Header'
import CardList from '../../сomponents/CardList'
import FuncButtons from '../../сomponents/FuncButtons'

const MainPage = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
    const [addClicked, setAddClicked] = useState(false)
    const [cardCreated, setCardCreated] = useState({})
    const [cardIds, setCardIds] = useState([])
    const [clear, setClear] = useState(false)

    if (delClicked) {
        cardIds.forEach((id) => {
            const cardIndex = cardData.findIndex((card) => card.id === id)
            cardData.splice(cardIndex, 1)
        })
        setClear(!clear)
        setDelClicked(false)
    }
    if (addClicked) {
        cardData.push(cardCreated)
        setAddClicked(false)
    }
    useEffect(() => {
        setCardIds([])
    }, [clear])

    return (
        <>
            <Header />
            <FuncButtons
                setReadOnly={(readOnly) => {
                    setReadOnly(readOnly)
                }}
                setDelClicked={(delClicked) => {
                    setDelClicked(delClicked)
                }}
                setAddClicked={(addClicked, card) => {
                    setAddClicked(addClicked)
                    setCardCreated(card)
                }}
                isReadOnly={readOnly}
            />
            <CardList
                cardData={cardData}
                readOnly={readOnly}
                clear={clear}
                setToDelete={(ids) => {
                    setCardIds(ids)
                }}
            />
        </>
    )
}

export default MainPage
