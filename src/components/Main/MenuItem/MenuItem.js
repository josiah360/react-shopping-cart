import React, { useRef, useContext } from "react";
import CartContext from "../../../context/context";

import Input from "../../../UI/Input";
import classes from './MenuItem.module.css'

const MenuItem = (props) => {

    const ctx = useContext(CartContext)
    const {addMeal, menu} = ctx


    const inputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const inputValue = +inputRef.current.value

        const newMeal = {
            mealId: props.id,
            mealTitle: menu[props.index].title,
            mealPrice: menu[props.index].price,
            amount: inputValue,
        }

        addMeal(newMeal, inputValue)
    }

    return (
        <li className={classes['menu-item']}>
            <div className={classes['menu-info']}>
                <h2>{menu[props.index].title}</h2>
                <p>{menu[props.index].desc}</p>
                <span>${menu[props.index].price}</span>
            </div>
            <Input 
                onSubmit={submitHandler}
                ref={inputRef}
                label='amount'
                input={{
                    type: 'number',
                    id: 'amount',
                    min: '1',
                    max: '5',
                    step:'1',
                    defaultValue: '1'
                }}
            />
        </li>
    )
}

export default MenuItem