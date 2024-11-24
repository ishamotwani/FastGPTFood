import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
//import logoIMG from './images/fastFoodTempImg';

function Navigation() {
    const navigate = useNavigate();

    const homeButton = () => {
        navigate('/');
    };

    const aboutButton = () => {
        navigate('/About');
    };

    const contactButton = () => {
        navigate('/Contact');
    };

    const cartButton = () => {
        navigate('/Cart');
    };

    const orderButton = () => {
        navigate('/Order');
    };

    return (
        <div>
            <button onClick={homeButton}>Home</button>
            <button onClick={aboutButton}>About</button>
            <button onClick={orderButton}>Order</button>
            <button onClick={cartButton}>Cart</button>
            <button onClick={contactButton}>Contact</button>
        </div>
    );
}


export default Navigation;