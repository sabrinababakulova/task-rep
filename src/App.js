import Header from './components/Header'
import Card from './components/Card'
import { Box } from '@chakra-ui/react'
import React from 'react'

function App() {
    return (
        <div>
            <Header />
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
                <Card />
            </Box>
        </div>
    )
}

export default App
