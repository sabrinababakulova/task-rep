import React, { useState } from 'react'
import Header from '../../Components/Header'
import CardList from '../../Components/CardList'
import FuncButtons from '../../Components/FuncButtons'

const index = ({ cardData }) => {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
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
                isReadOnly={readOnly}
            />
            <CardList
                cardData={cardData}
                readOnly={readOnly}
                delClicked={delClicked}
            />
        </>
    )
}

export default index
