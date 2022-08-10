import React, { useContext } from "react";
import CartContext from "../../../context/context";

import MenuItem from "./MenuItem";
import classes from './Menu.module.css'

const Menu = () => {

    const ctx = useContext(CartContext)
    const { menu } = ctx

    return (
        <ul className={classes.menu}>
            {menu.map((item, idx) =>
                <MenuItem 
                    key={item.id}
                    id={item.id}
                    index={idx}
                />
            )}
        </ul>
    )
}

export default Menu