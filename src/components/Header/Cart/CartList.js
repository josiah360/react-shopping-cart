import React from 'react';

import CartItem from './CartItem';
import classes from './CartList.module.css'

const CartList = () => {
    return (
        <div className={classes.bg}>
            <ul className={classes['cart-list']}>
                <CartItem />
                <CartItem />
            </ul>
        </div>
    )
}

export default CartList