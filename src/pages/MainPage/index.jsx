import React, { useState, useEffect } from 'react'
import CardList from '../../components/CardList'
import FuncButtons from '../../components/FuncButtons'
import { useCardData } from '../../contextProvider'

const MainPage = () => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
    const [cardIds, setCardIds] = useState([])
    const { removeCard } = useCardData()

    useEffect(()=>{
        removeCard(cardIds)
        setCardIds([])
    }, [delClicked])

    return (
        <>
            <FuncButtons
                setReadOnly={setReadOnly}
                setDelClicked={setDelClicked}
                isReadOnly={readOnly}
            />
            <CardList
                readOnly={readOnly}
                delClicked={delClicked}
                setToDelete={setCardIds}
            />
        </>
    )
}

export default MainPage
