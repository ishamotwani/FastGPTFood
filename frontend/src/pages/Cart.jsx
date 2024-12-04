import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../functions/Navigation';

const CostWillBeZero = ({setCost, cost}) => {
    useEffect(() => {
        if (cost === null) {
            setCost(0);
        }
    }, [setCost]);
    return ( null );
}

function Cart ({items = [], removeItem, removeAll, setCostArray, costArray, setCost, cost}) {
    //if it's in-person deliver or online
    //time is also set whenever a delibutton is trigger
    //also like half the 
    const [typeOrder, setTypeOrder] = useState("");
    const [deliTime, setDeliTime] = useState(0);
    const [typePay, setTypePay] = useState("");

    //delivery types
    const homeDeliButton = () => {
        setTypeOrder("Drop-Off Delivery");
        setDeliTime(20 + (items.length * 3) );
    }

    const inPersonDeliButton = () => {
        setTypeOrder("In-Person Delivery");
        setDeliTime((items.length * 3));
    }

    //Payment type
    const masterCardButton = () => {
        setTypePay("Master Card")
    }
    
    const visaButton = () => {
        setTypePay("Visa")
    }
    
    const paypalButton = () => {
        setTypePay("Paypal")
    }

    //'reset' button basically
    const purchaseButton = () => {
        setTypeOrder("");
        setTypePay("");
        setDeliTime(0);
        removeAll();
        setCostArray([]);
        setCost(0);   
        CostWillBeZero();
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
                <div className="orderItems">
                    {items.map((item, index) => (
                        <span key={index}>
                            {item} <button onClick={() => removeItem(index)}>  X  </button>
                        </span>
                    ))}
                </div>
            )}
        </div>

        <div className='DeliveryType'>
            <h2>Delivery</h2>
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
                            <p>Your home location?</p>
                            <input type='text' placeholder='help' />

                        </div>
                    ) : (
                        <div>
                            <p>Estimated Pickup Time: {deliTime} minutes</p>
                            <p>What store you picking up from</p>
                            <select onChange={(e) => console.log(e.target.value)}>
                                <option value="">Please Select a Location</option>
                                <option value="LocationA">The Moon</option>
                                <option value="LocationB">The Deep Beyond</option>
                                <option value="LocationC">My Death Bed</option>
                            </select>
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
        
        <div className='costOverall'>
            {cost > 0 ? <p>Total: ${cost}</p> : <p>No items in cart</p>}
        </div>
        
        <div className='purchase'>
            <button onClick={purchaseButton}>Purchase</button>
        </div>
    </div>
    );
}

export default Cart;