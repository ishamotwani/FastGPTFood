import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import CircleImg from '../images/CircleImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/Contact.css';

function Contact() {
    return (
      <div>
        <header>
          <img src={TempImg} alt="Logo" />
          <Navigation />
        </header>
  
        <div className="contactSection1">
          <img src={CircleImg} alt="Feedback" />
          <div>
            <h2>Send Feedback</h2>
            <p>Share your thoughts</p>
            <p>A method of contacting</p>
          </div>
        </div>
  
        <div className="contactSection2">
          <img src={CircleImg} alt="Customer Service" />
          <div>
            <h2>Contact Customer Service</h2>
            <p>Want customer service</p>
            <p>A method of contacting</p>
          </div>
        </div>

        <div className="phone">
            <img src={CircleImg} alt='this would be the phone' />
            <span>phone number</span>
        </div>

        <span className="email">
            <img src={CircleImg} alt='this would be email' />
            <span>contact email</span>
        </span>

        <div className="physicalLocation">
            <img src={CircleImg} alt='this would be the main headquaters' />
            <span>IRL location</span>
        </div>
      </div>
    );
}
export default Contact;