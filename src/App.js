import React from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import CardPreview from './pages/CardPreview';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SettingsPage from './pages/Settings';

const App = () => {
  const { user } = useSelector((state) => state);
  return (
    <Router>
      <Box maxW="max" ml="auto" mr="auto" mt="24">
        {user.status ? (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="card/:id" element={<CardPreview />} />
              <Route path="*" element={<NotFoundPage />} />
              {user.role === 'admin' && (
                <Route path="settings" element={<SettingsPage />} />
              )}
            </Routes>
          </>
        ) : (
          <SignInPage />
        )}
      </Box>
    </Router>
  );
};

export default App;
