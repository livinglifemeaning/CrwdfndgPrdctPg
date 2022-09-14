import classes from "../styles/Button.module.css"; 

const Button = (props) => {
  return (
    <button onClick={props.onClick}className={`${classes.btn} ${props.status === 'disabled' ? classes.disabled : ''}`}>
      {props.children}
    </button>
  )
}

export default Button; 
