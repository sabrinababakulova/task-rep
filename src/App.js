import React from 'react'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import SignInPage from './pages/SignInPage'
import CardPreview from './pages/CardPreview'
import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAllCardsData } from './store/AllCardsSlice'
const App = () => {
  const dispatch = useDispatch()
  dispatch(setAllCardsData())
  return (
    <Router>
      <Box maxW="max" ml="auto" mr="auto" mt="24">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="card/:id" element={<CardPreview />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
