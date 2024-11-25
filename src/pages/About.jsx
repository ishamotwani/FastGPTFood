import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/About.css';

function About () {

    return (
        <div>
            <header>
                <img src={TempImg} alt='Logo' />
                <Navigation />
            </header>

            <div>
                <img src={TempImg} alt='our missions and belief' />
                <p>Describtion</p>
            </div>  

            <div>
                <h1>our founders</h1>
                <img src={TempImg} alt='image a' />
                <img src={TempImg} alt='image b' />
                <img src={TempImg} alt='image c' />
                <p>something something founders</p>
            </div>
        </div>
    );
}

export default About;