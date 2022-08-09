import React, { useContext } from "react";
import CartContext from "../../../context/context";

import classes from './CartItem.module.css'

const CartItem = (props) => {

    const ctx = useContext(CartContext)
    const { cart, decrement, increment } = ctx
    
    return (
        <li className={classes['cart-item']}>
            <div className={classes['item-info']}>
                <h2>{cart[props.index].mealTitle}</h2>
                <div className={classes['price-info']}>
                    <span className={classes.price}>${cart[props.index].mealPrice}</span>
                    <span className={classes.qty}>x{cart[props.index].amount}</span>
                </div>
            </div>
            <div className={classes.buttons}>
                <button type='button' className={classes['decrement-button']} onClick={() => decrement(props.mealId)}>-</button>
                <button type='button' className={classes['increment-button']} onClick={() => increment(props.mealId)}>+</button>
            </div>
        </li>
    )
}

export default CartItem