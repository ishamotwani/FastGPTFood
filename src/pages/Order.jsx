import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/Order.css';

function Order () {
    return (
        <div>
        <header>
            <img src={TempImg} alt='Logo' />
            <Navigation />
          </header>

        </div>
    );
}

export default Order;