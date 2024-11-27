import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/Order.css';

// Anything past navi is temp because OMG idk how we are creating a chatbot
function Order ({addItem}) {
    const [input, setInput] = useState("");
    

    const add = () => {
        addItem(input);
        setInput("")
    }

    return (
        <div>
        <header>
            <Navigation />
        </header>

          <h3>Add Items</h3>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='help' />
          <button onClick={add}>Add</button>
        </div>
    );
}

export default Order;