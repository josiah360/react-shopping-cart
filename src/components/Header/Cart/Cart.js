import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../../context/context";

import CartList from "./CartList";
import classes from './Cart.module.css'

const Cart = () => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const ctx = useContext(CartContext)

    const { cart } = ctx

    const totalItems = cart.reduce((total, meal) => {
        return total + meal.amount
    }, 0)

    const btnClass = `${classes.cart} ${btnIsHighlighted ? classes.bounce : ''}`;

    useEffect(() => {
        if(cart.length === 0) {
            return;
        }

        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [cart])


    const [showCart, setShowCart] = useState(false)

    const openCartHandler = () => {
        setShowCart(true)
    }

    const closeCartHandler = () => {
        setShowCart(false)
    }

    return (
        <React.Fragment>
            {showCart && <CartList closeCart={closeCartHandler} />}
            <li className={btnClass} onClick={openCartHandler}>
                Your Cart
                <span className={classes['total-item']}>{totalItems}</span>
            </li>
        </React.Fragment>
    )
}

export default Cart