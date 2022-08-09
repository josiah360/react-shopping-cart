import React, { useRef } from "react";

import classes from './MenuItem.module.css'

const MenuItem = (props) => {

    const inputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const inputValue = +inputRef.current.value

        const newMeal = {
            mealId: props.id,
            mealTitle: props.title,
            mealPrice: props.price,
            amount: inputValue,
        }

        props.addMeal(newMeal, inputValue)
    }

    return (
        <li className={classes['menu-item']}>
            <div className={classes['menu-info']}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <span>${props.price}</span>
            </div>
            <form className={classes['add-menu']} onSubmit={submitHandler} >
                <label>
                    Amount 
                    <input 
                        type='number'  
                        ref={inputRef}
                        defaultValue='1'
                        min='1'
                    />
                </label>
                <button type='submit'>+Add</button>
            </form>
        </li>
    )
}

export default MenuItem