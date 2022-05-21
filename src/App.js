import Header from './Components/Header'
import CardList from './Components/CardList'
import cardData from './Data/CardData.json'
import { Box } from '@chakra-ui/react'
import React from 'react'

function App() {
    return (
        <div>
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
                <Header />
                <CardList cardData={cardData} />
            </Box>
        </div>
    )
}

export default App
