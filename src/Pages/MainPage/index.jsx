import React, { useState } from 'react'
import Header from '../../сomponents/Header'
import CardList from '../../сomponents/CardList'
import FuncButtons from '../../сomponents/FuncButtons'

const index = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
    const [addClicked, setAddClicked] = useState(false)
    const [cardCreated, setCardCreated] = useState({})

    if (addClicked) {
        cardData.push(cardCreated)
        setAddClicked(false)
    }

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
                delClicked={delClicked}
                addClicked={addClicked}
            />
        </>
    )
}

export default index
