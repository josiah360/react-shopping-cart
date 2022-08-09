import React from "react";

import classes from './CartItem.module.css'

const CartItem = (props) => {
    
    return (
        <li className={classes['cart-item']}>
            <div className={classes['item-info']}>
                <h2>{props.mealTitle}</h2>
                <div className={classes['price-info']}>
                    <span className={classes.price}>${props.mealPrice}</span>
                    <span className={classes.qty}>x{props.amount}</span>
                </div>
            </div>
            <div className={classes.buttons}>
                <button type='button' className={classes['decrement-button']} onClick={() => props.decrement(props.mealId)}>-</button>
                <button type='button' className={classes['increment-button']} onClick={() => props.increment(props.mealId)}>+</button>
            </div>
        </li>
    )
}

export default CartItem