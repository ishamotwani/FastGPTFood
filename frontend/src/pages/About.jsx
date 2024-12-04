import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import CircleImg from '../images/CircleImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/About.css';

function About () {
    return (
        <div>
            <header>
                <Navigation />
            </header>

            <main className='missionsBelief'>
                <h2>Our Mission and Beliefs</h2>
                <img src={TempImg} alt='our missions and belief' className='ourBeliefImg' />
                <span>Something about these Beliefs</span>
            </main>  

            <div className='founders'>
                <h2>Our Founders</h2>
                <div className='foundersImages'>
                    <img src={CircleImg} alt='image a' />
                    <img src={CircleImg} alt='image b' />
                    <img src={CircleImg} alt='image c' />
                </div>
                <p>something something founders</p>
            </div>
        </div>
    );
}

export default About;