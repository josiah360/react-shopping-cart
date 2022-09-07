import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../../context/context';

import CartItem from './CartItem';
import ConfirmOrder from './confirmOrder';
import classes from './CartList.module.css'

const Backdrop = (props) => {
    return <div className={classes.bg} onClick={props.closeCart}></div>
}

const CartModal = (props) => {

    const ctx = useContext(CartContext)
    const { cart } = ctx
    const cartContent = cart.length
    
    return (
        <ul className={classes['cart-list']}>
            {cartContent === 0 && <h1>No Items in Cart</h1>}
            {cartContent > 0 && cart.map((item, index) => 
                <CartItem 
                    key={item.mealId}
                    index={index}
                    mealId={item.mealId}
                />
            )}

            <ConfirmOrder closeCart={props.closeCart} openOrder={props.openOrder} />
        </ul>
    )
}

const CartList = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop closeCart={props.closeCart} />, document.getElementById('backdrop') )}
            {ReactDOM.createPortal(<CartModal closeCart={props.closeCart} openOrder={props.openOrder} />, document.getElementById('modal'))}
        </React.Fragment>
    )
}

export default CartList

