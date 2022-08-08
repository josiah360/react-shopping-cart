import React from "react";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";

const Header = (props) => {
    return (
        <header>
            <Navigation cart={props.cart} />
            <Hero />
        </header>
    )
}

export default Header