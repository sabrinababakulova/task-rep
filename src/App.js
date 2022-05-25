import Header from './Components/Header'
import CardList from './Components/CardList'
import cardData from './Data/CardData.json'
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import FuncButtons from './Components/FuncButtons'

function App() {
    const [readOnly, setReadOnly] = useState(false)
    const [delClicked, setDelClicked] = useState(false)
    return (
        <div>
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
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
            </Box>
        </div>
    )
}

export default App
