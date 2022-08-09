import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../../context/context';

import CartItem from './CartItem';
import ConfirmOrder from './confirmOrder';
import classes from './CartList.module.css'

const CartModal = (props) => {

    const ctx = useContext(CartContext)
    const { cart } = ctx
    const cartContent = cart.length
    

    return (
        <div className={classes.bg}>
            <ul className={classes['cart-list']}>
                {cartContent === 0 && <h1>No Items in Cart</h1>}
                {cartContent > 0 && cart.map((item, index) => 
                    <CartItem 
                        key={item.mealId}
                        index={index}
                        mealId={item.mealId}
                    />
                )}

                <ConfirmOrder closeCart={props.closeCart} />
            </ul>
        </div>
    )
}

const CartList = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CartModal 
                cart={props.cart}
                increment={props.increment}
                decrement={props.decrement}
                closeCart={props.closeCart}
            />, 
            document.getElementById('modal'))}
        </React.Fragment>
    )
}

export default CartList

