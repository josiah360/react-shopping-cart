import React, { Fragment, useState } from 'react';
import CartContext from './context/context';

import Header from './components/Header/Header';
import Main from './components/Main';
import './App.css';

const DUMMY_MENU = [
  {
    id: 'm1',
    title: 'Sushi',
    desc: 'Finest fish and veggies',
    price: 22.99
  },
  {
    id: 'm2',
    title: 'Schnitzel',
    desc: 'A german specialty!',
    price: 16.50
  },
  {
    id: 'm3',
    title: 'Barbeque Burger',
    desc: 'American, raw and meaty',
    price: 12.99
  },
  {
    id: 'm4',
    title: 'Green Bowl',
    desc: 'Healthy...and green...',
    price: 18.99
  },
]

const DUMMY_CART = []


function App() {

  const [menu, setMenu] = useState(DUMMY_MENU)
  const [cart, setCart] = useState(DUMMY_CART)

  const AddtoCart = (meal, amount) => {
    setCart(prevCart => {
      const isMealInCart = prevCart.find(item => item.mealId === meal.mealId)

      if(isMealInCart) {
        isMealInCart.amount += amount
        return [...prevCart]
      }
      
      return [...prevCart, meal]
    })
  }

  const incrementCartItem = (id) => {
    setCart(prevCart => {
      const cartItem = prevCart.find(item => item.mealId === id)
      cartItem.amount += 1
      return [...prevCart]
    })
  }

  const decrementCartItem = (id) => {
    setCart(prevCart => {

      const cartItem = prevCart.find(item => item.mealId === id)
      
      if(cartItem.amount <= 1) {
        const newCart = prevCart.filter(item => item.mealId !== id)
        prevCart = newCart
        return [...prevCart]
      }

      cartItem.amount -= 1
      return [...prevCart]
       
    })
  }

  return (
    <CartContext.Provider value={{
      cart: cart,
      addMeal: AddtoCart,
      increment: incrementCartItem,
      decrement: decrementCartItem
    }}>
      <Header 
        cart={cart} 
        increment={incrementCartItem} 
        decrement={decrementCartItem} 
      />
      <Main menu={menu} addMeal={AddtoCart} />
    </CartContext.Provider>
  );
}

export default App;
