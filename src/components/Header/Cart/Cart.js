import React, { useState, useContext } from "react";
import CartContext from "../../../context/context";

import CartList from "./CartList";
import classes from './Cart.module.css'

const Cart = (props) => {

    const [showCart, setShowCart] = useState(false)
    const ctx = useContext(CartContext)

    const totalItems = ctx.cart.reduce((total, meal) => {
        return total + meal.amount
    }, 0)

    const openCartHandler = () => {
        setShowCart(true)
    }

    const closeCartHandler = () => {
        setShowCart(false)
    }

    return (
        <React.Fragment>
            {showCart && 
                <CartList 
                    cart={props.cart} 
                    closeCart={closeCartHandler} 
                    increment={props.increment} 
                    decrement={props.decrement}
            />}
            <li className={`${classes.cart}`} onClick={openCartHandler}>
                Your Cart
                <span className={classes['total-item']}>{totalItems}</span>
            </li>
        </React.Fragment>
    )
}

export default Cart