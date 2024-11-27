//Import Section
import {BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState } from 'react'
import './CssPages/App.css'
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


  //The list is done here so we can use it on other pages
  // with the add button for the order page and remove for the cart page
  //the cost list will set a cost for the item; with items and cost being connected by list placement
  const [items, setItems] = useState([]);
  const [cost, setCost] = useState([]);

  const addItem = (item) => {
    setItems ([...items, item]);
  }

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  }

  const removeAllItems = () => {
    setItems([]);
  }

  return (
    <Router>
      <div>
        <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<Order  addItem={addItem}/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart items={items} removeItem={removeItem} removeAll={removeAllItems} cost={cost}/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App;