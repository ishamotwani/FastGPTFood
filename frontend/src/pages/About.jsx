import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import CircleImg from '../images/CircleImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/About.css';

function About () {

//maybe function here

    return (
        <div>
            <header>
                <img src={TempImg} alt='Logo' />
                <Navigation />
            </header>

            <div>
                <h2>Our Mission and Beliefs</h2>
                <img src={TempImg} alt='our missions and belief' className='ourBeliefImg' />
                <span>Something about these Beliefs</span>
            </div>  

            <div>
                <h2>our founders</h2>
                <img src={CircleImg} alt='image a' className='personImg' />
                <img src={CircleImg} alt='image b' className='personImg' />
                <img src={CircleImg} alt='image c' className='personImg' />
                <p>something something founders</p>
            </div>
        </div>
    );
}

export default About;