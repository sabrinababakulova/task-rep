import React, { useState } from 'react'
import Header from '../../components/Header'
import CardList from '../../components/CardList'
import FuncButtons from '../../components/FuncButtons'
import { useCardData } from '../../App'

const MainPage = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
    const [addClicked, setAddClicked] = useState(false)
    const [cardCreated, setCardCreated] = useState({})
    const [cardIds, setCardIds] = useState([])
    const [clearTempArr, setClearTempArr] = useState(false)
    const { removeCard, addCard } = useCardData()

    if (delClicked) {
        removeCard(cardIds)
        setClearTempArr(!clearTempArr)
        setCardIds([])
        setDelClicked(false)
    }

    if (addClicked) {
        addCard(cardCreated)
        setAddClicked(false)
    }

    return (
        <>
            <Header />
            <FuncButtons
                setReadOnly={setReadOnly}
                setDelClicked={setDelClicked}
                setAddClicked={(addClicked, card) => {
                    setAddClicked(addClicked)
                    setCardCreated(card)
                }}
                isReadOnly={readOnly}
            />
            <CardList
                cardData={cardData}
                readOnly={readOnly}
                clearTempArr={clearTempArr}
                setToDelete={setCardIds}
            />
        </>
    )
}

export default MainPage
