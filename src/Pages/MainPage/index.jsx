import React, { useState } from 'react'
import Header from '../../components/Header'
import CardList from '../../components/CardList'
import FuncButtons from '../../components/FuncButtons'

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
