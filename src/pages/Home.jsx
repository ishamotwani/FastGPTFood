import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/Home.css';
//things work now, it's now just a formatting issue

function OrderButton() {
  const navigate = useNavigate();
  
  const moveButton = () => {
    navigate('/Order');
  }

  return (
    <div>
      <button onClick={moveButton}>Order</button>
    </div>
  )
}

function Home() {
    return (
        <div>
          <header>
            <img src={TempImg} alt='Logo' />
            <Navigation />
          </header>

          <div>
            <img src={TempImg} alt='Special Meal' className='orderImg' />
            <span>Something About the meal</span>
            <OrderButton />
          </div>

          <div>
            <img src={TempImg} alt='maybe about our order different system?' className='specialImg' />
            <span>Something About the image</span>
          </div>

          <div>
            <img src={TempImg} alt='maybe like donations we are doing?' className='specialImg'/>
            <span>Something About the image</span>
          </div>
        </div>
    );
}

export default Home;