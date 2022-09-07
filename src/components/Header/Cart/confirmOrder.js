import React, { useContext } from "react";
import CartContext from "../../../context/context";

import classes from './confirmOrder.module.css';

const ConfirmOrder = (props) => {

    const ctx = useContext(CartContext)
    const { cart } = ctx

    const totalAmount = cart.reduce((total, item) => {
        return total + (item.mealPrice * item.amount)
    }, 0)

    const orderHandler = () => {
        props.openOrder()
        props.closeCart()
    }

    return (
        <div className={classes.confirm}>
            <div className={classes.total}>
                <h2 className={classes.label}>Total Amount</h2>
                <p className={classes['total-price']}>${totalAmount.toFixed(2)}</p>
            </div>
            <div className={classes.btns}>
                <button type='button' onClick={props.closeCart}>Close</button>
                <button type='button' onClick={orderHandler} >Order</button>
            </div>
        </div>
    )
}

export default ConfirmOrder