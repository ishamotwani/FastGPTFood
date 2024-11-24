import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
//import logoIMG from './images/fastFoodTempImg';

function Home() {
    return (
        <div>
          <header>
            <h1>Welcome to the Home Page</h1>
          </header>
          <Navigation />
        </div>
    );
}

export default Home;