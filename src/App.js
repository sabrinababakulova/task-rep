import Header from './components/Header'
import MainPage from './pages/MainPage'
import NotFound from './pages/NotFoundPage'
import SignIn from './pages/SignIn'
import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
const App = () => {
    return (
        <Router>
            <Box maxW="max" ml="auto" mr="auto" mt="24" align="center">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
        </Router>
    )
}

export default App
