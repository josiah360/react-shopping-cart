import React from 'react';

import CartItem from './CartItem';
import classes from './CartList.module.css'

const CartList = (props) => {

    const totalAmount = props.cart.reduce((total, item) => {
        return total + (item.mealPrice * item.amount)
    }, 0)

    return (
        <div className={classes.bg}>
            <ul className={classes['cart-list']}>
                {props.cart.map((item, index) => 
                    <CartItem 
                        key={item.mealId}
                        index={index}
                        mealId={item.mealId}
                        mealTitle={item.mealTitle}
                        mealPrice={item.mealPrice}
                        amount={item.amount}s
                        increment={props.increment}
                        decrement={props.decrement}
                    />
                )}

                <div className={classes.confirm}>
                    <div className={classes.total}>
                        <h2 className={classes.label}>Total Amount</h2>
                        <p className={classes['total-price']}>${totalAmount.toFixed(2)}</p>
                    </div>
                    <div className={classes.btns}>
                        <button type='button' onClick={props.closeCart}>Close</button>
                        <button type='button'>Order</button>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default CartList