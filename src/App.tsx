import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import Footer from './components/common/Footer/Footer';
import { HomePage } from './pages/Home/HomePage';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 300,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route Component={HomePage} path='/' />
          <Route Component={AboutPage} path='/about' />
          <Route Component={ContactPage} path='/contact' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
