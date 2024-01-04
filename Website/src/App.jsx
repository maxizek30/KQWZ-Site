import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Stream from './pages/Stream'
import Navbar from './components/Navbar'
import theme from './theme'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toolbar } from '@mui/material'


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Toolbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
