import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <form className={classes['add-menu']} onSubmit={props.onSubmit} >
            <label htmlFor={props.label}>
                Amount 
                <input ref={ref} {...props.input} />
            </label>
            <button type='submit'>+Add</button>
        </form>
    )
})

export default Input