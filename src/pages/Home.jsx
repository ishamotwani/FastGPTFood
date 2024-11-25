import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import Navigation from '../functions/Navigation';

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
            <img src={TempImg} alt='Special Meal' />
            <p>Something About the meal</p>
            <OrderButton />
          </div>

          <div>
            <img src={TempImg} alt='UHHHH' />
            <p>Something About the image</p>
          </div>

          <div>
            <img src={TempImg} alt='IM THINKING IM THINKING' />
            <p>Something About the image</p>
          </div>
        </div>
    );
}

export default Home;