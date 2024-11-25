import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import '../CssPages/Navi.css';

//this is how the user will be able to move from page to page
//you will just import the navigation function to the header? of any page and the buttons will show up

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
        <div className="navi">
            <button onClick={homeButton}>Home</button>
            <button onClick={aboutButton}>About</button>
            <button onClick={orderButton}>Order</button>
            <button onClick={cartButton}>Cart</button>
            <button onClick={contactButton}>Contact</button>
        </div>
    );
}


export default Navigation;