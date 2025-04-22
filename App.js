import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HalisahaEkle from './pages/HalisahaEkle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Yeşil renk
    },
    background: {
      default: '#ffffff', // Beyaz arka plan
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HalisahaEkle />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 