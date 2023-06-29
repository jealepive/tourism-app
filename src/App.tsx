import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage';
import HeaderComponent from './components/common/Header/HeaderComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import FooterComponent from './components/common/Footer/FooterComponent';


function App() {  
  return (
    <>
      <BrowserRouter basename="/">
        <HeaderComponent />
        <Routes>
          <Route Component={HomePage} path="/" />
          <Route Component={AboutPage} path="/about" />
          <Route Component={ContactPage} path="/contact" />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
