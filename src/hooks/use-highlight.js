import { useState, useEffect } from "react";

const useHighlight = (validate, trigger) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    
    const isNotValid = validate(trigger)

    useEffect(() => {
        if(isNotValid) {
            return;
        }

        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [isNotValid, trigger])

    return btnIsHighlighted
}

export default useHighlight