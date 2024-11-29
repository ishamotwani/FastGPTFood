import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navigation from "../functions/Navigation";
import "../CssPages/Order.css";

// Anything past navi is temp because OMG idk how we are creating a chatbot

function CartButton() {
  const navigate = useNavigate();

  const moveButton = () => {
    navigate("/Cart");
  };

  return (
    <div>
      <button onClick={moveButton}>Order</button>
    </div>
  );
}

const MenuView = ({ menuItems, addThenChecksSize }) => {
  return (
    <div>
      <h4>Menu</h4>
      <p>Please select an item on the menu</p>
      <div>
        {menuItems.map((item, index) => (
          <button key={index} onClick={() => addThenChecksSize(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

const SizeView = ({ sizeItems, finalAdd }) => {
  return (
    <div>
      <h4>Please choose a size for your order:</h4>
      <div>
        {sizeItems.map((size, index) => (
          <button key={index} onClick={() => finalAdd(index)}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

function Order({ addItem, setCostArray, setCost }) {
  const [input, setInput] = useState("");
  const [addedTrigger, setAddedTrigger] = useState(false); //allows the program to know if something has been added
  const [addedText, setAddedText] = useState(""); //allows the program to know if the added text show showcase
  const [showItemsSizes, setshowItemsSizes] = useState(false); //allows the program to know if to show the sizes of the menu
  const [rememberItem, setRememberItem] = useState(""); //

  //menu items
  const menuItems = [
    "Pizza",
    "Poison",
    "Soda Pop",
    "Fries",
    "Onion Rings",
    "Golden Apple",
    "Immortal Phoenix Gearblade",
  ];
  //the items cost
  const costMenu = [14.99, 99.99, 3.23, 1.29, 1.29, 57, 1];

  //sizeItems: size of an orders
  //sizeCost: how much things get times by depending on the order size
  //default i guess is small?
  const sizeItems = ["small", "medium", "large"];
  const sizeCost = [1, 1.25, 1.5];

  //case insenesitive stuff
  const menuItemToLower = menuItems.map((item) => item.toLowerCase());

  //this adds an item to the cart, and stores the cost in both an array and int
  //the array is stored to ensure whenever the user removes it from the cart, the cost tied to that item is also removed
  //and the int is stored to catch overall numbers
  const addThenChecksSize = (name) => {
    if (menuItemToLower.includes(name.toLowerCase())) {
      setAddedText("Choose a size for your order?");
      setRememberItem(menuItemToLower.indexOf(name.toLowerCase()));
      setshowItemsSizes(true);
      setInput("");
    } else {
      setAddedText("What the hell you just tried to add?");
      setAddedTrigger(true);
    }
    setAddedTrigger(true);
  };

  //after an user orders an item and it's on the menu
  //this will trigger - which tries to kill me or smth idk
  //this will become what optional toppings the item will have.
  const finalAdd = (sizeIndex) => {
    if (rememberItem !== null) {
      const itemName = menuItems[rememberItem];
      const baseCost = costMenu[rememberItem];
      const sizeMultiploer = sizeCost[sizeIndex];
      const totalCost = Math.floor(baseCost * sizeMultiploer * 100) / 100;

      addItem(`${itemName} - ${sizeItems[sizeIndex]}`);
      setCostArray((prevCostArray) => [...prevCostArray, totalCost]);
      setCost((prevCost) => prevCost + totalCost);
      setAddedText(
        `Your ${itemName.toLowerCase()} ${
          sizeItems[sizeIndex]
        } has been added to the cart!`
      );

      setInput("");
      setAddedText(
        `Your ${
          sizeItems[sizeIndex]
        } ${itemName.toLowerCase()} has been added to the cart!`
      );
      setshowItemsSizes(false);
      setRememberItem(null);
      setAddedTrigger(true);
    }
  };

  //timer to showcase when user have order item and then message go bye bye
  useEffect(() => {
    if (addedTrigger) {
      const timer = setTimeout(() => {
        setAddedTrigger(false);
      }, 3000);
    }
  }, [addedTrigger]);

  return (
    <div>
      <header>
        <Navigation />
      </header>

      <div>
        {showItemsSizes ? (
          <div>
            <SizeView sizeItems={sizeItems} finalAdd={finalAdd} />
          </div>
        ) : (
          <div>
            <MenuView
              menuItems={menuItems}
              addThenChecksSize={addThenChecksSize}
            />
          </div>
        )}

        {addedTrigger && (
          <div>
            <p>{addedText}</p>
          </div>
        )}
      </div>
      <div>
        <CartButton />
      </div>
    </div>
  );
}

export default Order;
