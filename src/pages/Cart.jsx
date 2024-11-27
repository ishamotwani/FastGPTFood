import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../functions/Navigation';

function Cart ({items = [], removeItem, removeAll, cost}) {
    //if it's in-person deliver or online
    //time is also set whenever a delibutton is trigger
    const [typeOrder, setTypeOrder] = useState("");
    const [deliTime, setDeliTime] = useState(0);
  
    //Payment type
    const [typePay, setTypePay] = useState("");

    const homeDeliButton = () => {
        setTypeOrder("Drop-Off Delivery");
        setDeliTime(20 + (items.length * 3) );
    }

    const inPersonDeliButton = () => {
        setTypeOrder("In-Person Delivery");
        setDeliTime((items.length * 3));
    }

    const masterCardButton = () => {
        setTypePay("Master Card")
    }
    
    const visaButton = () => {
        setTypePay("Visa")
    }
    
    const paypalButton = () => {
        setTypePay("Paypal")
    }

    const purchaseButton = () => {
        setTypeOrder("");
        setTypePay("");
        setDeliTime(0);
        removeAll();
    }

    return (
        <div>
        <header>
            <Navigation />
        </header>
        
        <div className='ItemsInCart'>
            <h2>Remove Items from Cart</h2>
            {items.length === 0 ? (
                <p>cart is empty</p>
            ) : (
                <div>
                    {items.map((item, index) => (
                        <span key={index}>
                            {item} <button onClick={() => removeItem(index)}>  X  </button>
                        </span>
                    ))}
                </div>
            )}
        </div>

        <div className='DeliveryType'>
            <button onClick={homeDeliButton}>Drop-Off Delivery</button>
            <button onClick={inPersonDeliButton}>In-Person Pick Up</button>
            {typeOrder === "" ? (
                <h2>Delivery: </h2>
            ) : (
                <div>
                    <h2>Delivery: {typeOrder}</h2>
                    {typeOrder === "Drop-Off Delivery" ? (
                        <div>
                            <p>Estimated Delivery Time: {deliTime} minutes</p>
                        </div>
                    ) : (
                        <div>
                            <p>Estimated Pickup Time: {deliTime} minutes</p>
                        </div>
                    )}
                    </div>
                )}
        </div>

        <div className='paymentCards'> 
            <button onClick={paypalButton}>Pay Pal</button>
            <button onClick={visaButton}>Visa</button>
            <button onClick={masterCardButton}>Master Card</button>
            {typePay === "" ? (
                <div>
                    <h3>No Payment type has been chosen</h3>
                </div>
            ) : (
                <div>
                    <h3>Payment: {typePay}</h3>
                </div>
            )}
        </div>
        <div className='purchase'>
            <button onClick={purchaseButton}>Purchase</button>
        </div>
    </div>
    );
}

export default Cart;