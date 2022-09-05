import React, { useContext } from "react";
import CartContext from "../../../context/context";

import MenuItem from "./MenuItem";
import classes from './Menu.module.css'

const Menu = () => {

    const ctx = useContext(CartContext)
    const { menu, isLoading, error } = ctx

    let content = <p>Meals are not available</p>

    if(menu.length > 0) {
        content = menu.map((item, idx) =>
            <MenuItem 
                key={item.id}
                id={item.id}
                index={idx}
            />
        )
    }

    if(isLoading) {
        content = <p>Fetching meals...</p>
    }

    if(error) {
        content = error
    }

    return (
        <ul className={classes.menu}>
            {content}
        </ul>
    )
}

export default Menu