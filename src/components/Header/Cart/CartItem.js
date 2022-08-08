import React from "react";

import classes from './CartItem.module.css'

const CartItem = () => {
    return (
        <li className={classes['cart-item']}>
            <div className={classes['item-info']}>
                <h2>Sushi</h2>
                <div className={classes['price-info']}><span className={classes.price}>$16.22</span><span className={classes.qty}>x2</span></div>
            </div>
            <div className={classes.buttons}>
                <button type='button' className={classes['decrement-button']}>-</button>
                <button type='button' className={classes['increment-button']}>+</button>
            </div>
        </li>
    )
}

export default CartItem