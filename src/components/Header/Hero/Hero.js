import React from "react";

import classes from './Hero.module.css'

const Hero = () => {
    return (
        <div className={classes['hero-img']}>
            <div className={classes.desc}>
                <h1>Delicious Food Delivered To You</h1>
                <p>Choose your favourite meal from our broad selection of available meals and enjoy delicious lunch or dinner at home</p>
                <p>All our meals are cooked with high-quality ingredients, just in time and of course by experienced chefs</p>
            </div>
        </div>
    )
}

export default Hero