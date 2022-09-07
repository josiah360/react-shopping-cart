import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../../context/context";

import CartList from "./CartList";
import classes from './Cart.module.css'
import OrderForm from "../../OrderForm/OrderForm";
import useModal from "../../../hooks/use-modal";
import useHighlight from "../../../hooks/use-highlight";

const Cart = () => {
    
    const ctx = useContext(CartContext)
    const { cart } = ctx

    const totalItems = cart.reduce((total, meal) => {
        return total + meal.amount
    }, 0)

    const btnIsHighlighted = useHighlight((cart) => cart.length === 0, cart)
    const btnClass = `${classes.cart} ${btnIsHighlighted ? classes.bounce : ''}`;

    const orderReqest = (order) => {
        
    }

    const {
        showModal: showCart,
        openModalHandler: openCartHandler,
        closeModalHandler: closeCartHandler} = useModal()

    const {
        showModal: showOrder,
        openModalHandler: openOrderHandler,
        closeModalHandler: closeOrderHandler} = useModal()

    return (
        <React.Fragment>
            {!showCart && showOrder && <OrderForm closeOrder={closeOrderHandler} />}
            {showCart && <CartList closeCart={closeCartHandler} openOrder={openOrderHandler} />}
            <li className={btnClass} onClick={openCartHandler}>
                Your Cart
                <span className={classes['total-item']}>{totalItems}</span>
            </li>
        </React.Fragment>
    )
}

export default Cart