import React from 'react';

import CartItem from './CartItem';
import classes from './CartList.module.css'

const CartList = () => {
    return (
        <div className={classes.bg}>
            <ul className={classes['cart-list']}>
                <CartItem />
                <CartItem />
                <div className={classes.confirm}>
                    <div className={classes.total}>
                        <h2 className={classes.label}>Total Amount</h2>
                        <p className={classes['total-price']}>$88.99</p>
                    </div>
                    <div className={classes.btns}>
                        <button type='button'>Close</button>
                        <button type='button'>Order</button>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default CartList