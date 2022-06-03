import React, { useState } from 'react'
import Header from '../../components/Header'
import CardList from '../../components/CardList'
import FuncButtons from '../../components/FuncButtons'
import { useCardData } from '../../contextProvider'

const MainPage = () => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
    const [cardIds, setCardIds] = useState([])
    const [clearTempArr, setClearTempArr] = useState(false)
    const { removeCard } = useCardData()

    if (delClicked) {
        removeCard(cardIds)
        setClearTempArr(!clearTempArr)
        setCardIds([])
        setDelClicked(false)
    }

    return (
        <>
            <Header />
            <FuncButtons
                setReadOnly={setReadOnly}
                setDelClicked={setDelClicked}
                isReadOnly={readOnly}
            />
            <CardList
                readOnly={readOnly}
                clearTempArr={clearTempArr}
                setToDelete={setCardIds}
            />
        </>
    )
}

export default MainPage
