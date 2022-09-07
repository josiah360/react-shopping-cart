import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [IsTouched, setIsTouched] = useState(false)

    const enteredValueIsValid = validateValue(enteredValue);
    const enteredValueIsNotValid = !enteredValueIsValid && IsTouched

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        isNotValid: enteredValueIsNotValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput