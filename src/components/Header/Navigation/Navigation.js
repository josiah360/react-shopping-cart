import React from "react";

import Cart from "../Cart/Cart";
import classes from './Navigation.module.css'

const Navigation = (props) => {
    return (
        <nav>
            <ul>
                <li className={classes.logo}>ReactMeals</li>
                <Cart cart={props.cart} />
            </ul>
        </nav>
    )
}

export default Navigation