//Import Section
import {BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Order from './pages/Order';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Navigation from './functions/Navigation';

//App is just getting routers up and loaded
//Everything else will be done on their own pages or in the function folder

//Also I hope we can get things clear
//the CssPage is for all css (expect app.css)
//the pages folder is for all pages
//and the functions folder is for all functions which will be used globally

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;