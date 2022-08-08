import React, { useState, useRef } from "react";

import classes from './MenuItem.module.css'

const MenuItem = (props) => {

    const [itemInput, setItemInput] = useState('1')

    const inputChangeHandler = (e) => {
        setItemInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const newMeal = {
            mealId: props.id,
            mealTitle: props.title,
            mealPrice: props.price,
            amount: +itemInput,
        }

        props.addMeal(newMeal, +itemInput)
    }

    return (
        <li className={classes['menu-item']}>
            <div className={classes['menu-info']}>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <span>${props.price}</span>
            </div>
            <form className={classes['add-menu']} onSubmit={submitHandler} >
                <label>Amount <input type='number' value={itemInput} onChange={inputChangeHandler} /></label>
                <button type='submit'>+Add</button>
            </form>
        </li>
    )
}

export default MenuItem