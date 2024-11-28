import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import TempImg from '../images/TempImg.png';
import Navigation from '../functions/Navigation';
import '../CssPages/Order.css';

// Anything past navi is temp because OMG idk how we are creating a chatbot

function CartButton() {
    const navigate = useNavigate();
    
    const moveButton = () => {
      navigate('/Cart');
    }

    return (
      <div>
        <button onClick={moveButton}>Order</button>
      </div>
    )
  }

function Order ({addItem, setCostArray, setCost}) {
    const [input, setInput] = useState("");
    const [addedTrigger, setAddedTrigger] = useState(false);
    const [addedText, setAddedText] = useState("");

    //the menuItems yippeeeeeeee
    const menuItems = ["Pizza", "Poison", "Soda Pop", "Fries", "Onion Rings", "Golden Apple", "Immortal Phoenix Gearblade"];
    const menuItemToLower = menuItems.map(item => item.toLowerCase());

    //the items cost
    const costMenu = [14.99, 99.99, 3.23, 1.29, 1.29, 57, 1]; 

    //this adds an item to the cart, and stores the cost in both an array and int
    //the array is stored to ensure whenever the user removes it from the cart, the cost tied to that item is also removed
    //and the int is stored to catch overall numbers 
    const add = () => {
        if (menuItemToLower.includes(input.toLowerCase())) {
            addItem(input.toLowerCase());
            setAddedText("Your item has been added to the cart!");

            const menuIndex = menuItemToLower.indexOf(input.toLowerCase());
            const getCost = costMenu[menuIndex];

            setCostArray(prevCostArray => [...prevCostArray, + getCost]);
            setCost(prevCost => prevCost + costMenu[menuIndex]);
        } else {
            setAddedText("What the hell you just tried to add?");
        }
        setInput("");
        setAddedTrigger(true);
    }

    //timer to showcase when user have order item and then message go bye bye
    useEffect(() => {
        if (addedTrigger) {
            const timer = setTimeout(() => {setAddedTrigger(false);
            }, 3000);
        }
    }, [addedTrigger]);

    return (
        <div>
            <header>
                <Navigation />
            </header>

            <div>
                <h4>Hello welcome to FastGPTFood this is what we have on our menu, please enter your menu items one at a time</h4>
                <span>
                    {menuItems.map((item, index) => (
                        <p>{item}</p>  
                    ))}
                </span>

                {addedTrigger === true ? (
                    <div>
                        <p>{addedText}</p>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        
            <div>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='help' />
            </div>
        
            <div>
            <button onClick={add}>Add</button>
                <CartButton />
            </div>
        </div>
    );
}

export default Order;