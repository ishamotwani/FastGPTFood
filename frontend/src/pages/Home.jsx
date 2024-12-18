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
            <Navigation />
          </header>

          <div className='specialImgSection'>
            <img src={TempImg} alt='Special Meal' className='orderImg' />
            <div className='imgContent'>
              <span>Meal description</span>
              <OrderButton />
            </div>
          </div>

          <div class="mainImages">
            <img src={TempImg} alt='maybe about our order different system?' className='specialImg' />
            <img src={TempImg} alt='maybe like donations we are doing?' className='specialImg'/>
          </div>

          <div className='Imgdescription'>
            <span>Something About the image  </span>
            <span>Something About the image</span>
          </div>
        </div>
    );
}

export default Home;