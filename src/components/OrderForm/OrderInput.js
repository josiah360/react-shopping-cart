import classes from './OrderInput.module.css';

const OrderInput = (props) => {

    return  <div className={`${classes['form-control']} ${props.inputIsNotValid ? classes.invalid : '' }`} >
                <label htmlFor={props.input.id}>{props.label}</label>
                <input {...props.input} className={classes.input} />
                {props.inputIsNotValid && <p className={classes['error-text']}>This input is not valid</p>}
            </div>     
}

export default OrderInput