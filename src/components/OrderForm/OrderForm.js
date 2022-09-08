import { useState, Fragment } from "react";
import ReactDOM from 'react-dom'

import OrderInput from "./OrderInput";
import classes from './OrderForm.module.css';
import useInput from "../../hooks/use-input";
import useToday from "../../hooks/use-today";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}></div>
    )
}

const Form = (props) => {

    const today = useToday()

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        isNotValid: enteredNameIsNotValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameInputReset} = useInput(value => value.trim() !== '')

    const {
        value: enteredAddress,
        isValid: enteredAddressIsValid,
        isNotValid: enteredAddressIsNotValid,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: addressInputReset} = useInput(value => value.trim() !== '')

    const formIsValid = enteredNameIsValid && enteredAddressIsValid

    const formSubmissionHandler = (e) => {
        e.preventDefault()

        if(!formIsValid) {
            return
        }

        const order = {
            name: enteredName,
            address: enteredAddress,
            date: today
        }

        console.log(order)
        props.onOrder(order)

        nameInputReset()
        addressInputReset()

        props.closeOrder()
    
    }

    let textContent = 'Confirm Order'

    if(props.isLoading) {
        textContent = 'Sending order...'
    }

    if(props.error) {
        textContent = props.error
    }

    return (
        <form onSubmit={formSubmissionHandler} className={classes.form}>
            <OrderInput 
                label='Name'
                inputIsNotValid={enteredNameIsNotValid}
                input={{
                    type: 'text',
                    id: 'name',
                    value: enteredName,
                    onChange: nameChangeHandler,
                    onBlur: nameBlurHandler
                }}
            />

            <OrderInput 
                label='Address'
                inputIsNotValid={enteredAddressIsNotValid}
                input={{
                    type: 'text',
                    id: 'address',
                    value: enteredAddress,
                    onChange: addressChangeHandler,
                    onBlur: addressBlurHandler
                }}
            />
    
            <div className={classes["form-actions"]}>
                <button type='button' onClick={props.closeOrder} >Cancel</button>
                <button type='submit' disabled={!formIsValid}>{ textContent }</button>
            </div>
            </form>
    )
}

const OrderForm = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Form 
                    closeOrder={props.closeOrder} 
                    onOrder={props.onOrder} 
                    isLoading={props.isLoading}
                    error={props.error}
                />,

                document.getElementById('modal'))}
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
        </Fragment>
    )
}

export default OrderForm
