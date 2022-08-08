import React from "react";

import MenuItem from "./MenuItem";
import classes from './Menu.module.css'

const Menu = (props) => {
    return (
        <ul className={classes.menu}>
            {props.menu.map((item, idx) =>
                <MenuItem 
                    key={item.id}
                    id={item.id}
                    index={idx}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    addMeal={props.addMeal}
                />
            )}
        </ul>
    )
}

export default Menu