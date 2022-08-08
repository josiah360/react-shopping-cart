import React from "react";

import classes from './Cart.module.css'

const Cart = (props) => {

    const totalItems = props.cart.reduce((total, meal) => {
        return total + meal.amount
    }, 0)

    return (
        <li className={`${classes.cart}`}>Your Cart<span className={classes['total-item']}>{totalItems}</span></li>
    )
}

export default Cart