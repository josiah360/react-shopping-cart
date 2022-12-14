import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";

const CartContext = React.createContext({
    menu: [],
    cart: [],
    isLoading: false,
    error: null,
    addMeal: (meal, amount) => {},
    increment: (id) => {},
    decrement: (id) => {}
})

// const DUMMY_MENU = [
//     {
//       id: 'm2',
//       title: 'Schnitzel',
//       desc: 'A german specialty!',
//       price: 16.50
//     },
//     {
//       id: 'm3',
//       title: 'Barbeque Burger',
//       desc: 'American, raw and meaty',
//       price: 12.99
//     },
//     {
//       id: 'm4',
//       title: 'Green Bowl',
//       desc: 'Healthy...and green...',
//       price: 18.99
//     },
// ]
  
const DUMMY_CART = []

export const ContextProvider = (props) => {

  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState(DUMMY_CART)

  const {isLoading, error, sendRequest: fetchMeals} = useHttp()

  useEffect(() => {
    const transformedMeals = (mealsData) => {
      const meals = []

      for(const key in mealsData) {
        meals.push({
          id: key,
          title: mealsData[key].title,
          desc: mealsData[key].desc,
          price: mealsData[key].price
        })
      }

      setMenu(meals)
    }

    fetchMeals({url: 'https://react-http-45729-default-rtdb.firebaseio.com/meals.json'}, transformedMeals)
  }, [fetchMeals])


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
            menu: menu,
            cart: cart,
            isLoading: isLoading,
            error: error,
            addMeal: AddtoCart,
            increment: incrementCartItem,
            decrement: decrementCartItem
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext