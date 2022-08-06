import React from "react";

import classes from './Cart.module.css'

const Cart = (props) => {
    return (
        <li className={classes.cart}>Your Cart<span className={classes['total-item']}>0</span></li>
    )
}

export default Cart