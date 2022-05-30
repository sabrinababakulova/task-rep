import MainPage from './pages/MainPage'
import { Box } from '@chakra-ui/react'
import React from 'react'
import cardData from './data/CardData.json'

const App = () => {
    return (
        <div>
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
                <MainPage cardData={cardData} />
            </Box>
        </div>
    )
}

export default App
