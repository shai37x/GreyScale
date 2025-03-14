import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Booking from './pages/Booking'
import Footer from './pages/Footer'
import Portfolio from './pages/Portfolio'
import StaffRequestPage from './pages/StaffRequest'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Professionals from './pages/Professionals'
import Photographer from './pages/Photographer'
import Profile from './pages/Profile'
import AdminBooking from './pages/AdminBooking'


export const App = () => {
  return (
    <BrowserRouter> 
    <Navbar />   
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path='/Professionals' element={<Professionals />} />
        <Route path="/Admin" element={<Portfolio />} />
        <Route path="/AdminBooking" element={<AdminBooking />} />
        <Route path="/Photographer" element={<Photographer />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/StaffRequest' element={<StaffRequestPage/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
export default App 
