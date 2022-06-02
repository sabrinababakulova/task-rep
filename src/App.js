import MainPage from './pages/MainPage'
import { Box } from '@chakra-ui/react'
import React from 'react'
import cardData from './data/CardData.json'
import PropTypes from 'prop-types';



export const UserContext = React.createContext({
    dataDisplay: cardData,
    setDataDisplay: () => {}
    });
const App = () => {
    return (
        <div>
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
                <MainPage cardData={cardData} />
            </Box>
        </div>
    )
}

App.propTypes = {
    cardData: PropTypes.array
}

export default App
