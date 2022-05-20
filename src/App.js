import Header from './components/Header'
import Collection from './components/Card'
import { Box } from '@chakra-ui/react'
import React from 'react'

function App() {
    return (
        <div>
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
                <Header />
                <Collection header="Initial Caption" body="Initial Text" />
            </Box>
        </div>
    )
}

export default App
