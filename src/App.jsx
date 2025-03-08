import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Portfolio from './pages/Portfolio'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter> 
    <Navbar />   
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        
      </Routes>
      
    </BrowserRouter>

  )
}
export default App 
