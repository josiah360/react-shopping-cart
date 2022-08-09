import React from "react";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";

const Header = (props) => {
    return (
        <header>
            <Navigation 
                cart={props.cart} 
                increment={props.increment} 
                decrement={props.decrement}
            />
            <Hero />
        </header>
    )
}

export default Header