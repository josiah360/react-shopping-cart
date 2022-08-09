import React from "react";

import Cart from "../Cart/Cart";
import classes from './Navigation.module.css'

const Navigation = () => {

    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li className={classes.logo}>ReactMeals</li>
                <Cart />
            </ul>
        </nav>
    )
}

export default Navigation