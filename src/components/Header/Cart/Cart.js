import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../../context/context";

import useHighlight from "../../../hooks/use-highlight";
import useModal from "../../../hooks/use-modal";
import useHttp from "../../../hooks/use-http";

import CartList from "./CartList";
import OrderForm from "../../OrderForm/OrderForm";

import classes from './Cart.module.css'


const Cart = () => {
    
    const ctx = useContext(CartContext)
    const { cart } = ctx

    const totalItems = cart.reduce((total, meal) => {
        return total + meal.amount
    }, 0)

    const btnIsHighlighted = useHighlight((cart) => cart.length === 0, cart)
    const btnClass = `${classes.cart} ${btnIsHighlighted ? classes.bounce : ''}`;

    const { isLoading, error, sendRequest: sendOrder } = useHttp()

    const createOrder = (order, data) => {
        const generatedId = data.name
        const createdOrder = {id: generatedId, order: cart, ...order}
        console.log(createdOrder)
    }

    const orderRequest = (order) => {
        sendOrder({
            url: 'https://react-http-45729-default-rtdb.firebaseio.com/orders.json',
            method: 'POST',
            body: {order: cart, ...order},
            headers: {
                'Content-Type': 'application/json'
            }
        }, createOrder.bind(null, order))
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
            {!showCart && showOrder && 
            <OrderForm 
                closeOrder={closeOrderHandler} 
                onOrder={orderRequest} 
                isLoading={isLoading} 
                error={error}
            />}
            {showCart && <CartList closeCart={closeCartHandler} openOrder={openOrderHandler} />}
            <li className={btnClass} onClick={openCartHandler}>
                Your Cart
                <span className={classes['total-item']}>{totalItems}</span>
            </li>
        </React.Fragment>
    )
}

export default Cart