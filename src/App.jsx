import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Stream from './pages/Stream'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import theme from './theme'
import Footer from './components/Footer'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Toolbar } from '@mui/material'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Router>
        <ScrollToTop />
          <Navbar />
          <Toolbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
