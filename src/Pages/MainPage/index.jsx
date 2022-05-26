import React, { useState } from 'react'
import Header from '../../сomponents/Header'
import CardList from '../../сomponents/CardList'
import FuncButtons from '../../сomponents/FuncButtons'
import { v4 as uuidv4 } from 'uuid'

const index = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
    const [addClicked, setAddClicked] = useState(false)
    const newCard = () => {
        cardData.push({
            id: uuidv4(),
            header: `header${cardData.length + 1}`,
            body: `body${cardData.length + 1}`,
        })
    }

    if (addClicked) {
        newCard()
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
                setAddClicked={(addClicked) => {
                    setAddClicked(addClicked)
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
