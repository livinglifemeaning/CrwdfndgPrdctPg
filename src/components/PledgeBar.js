import {useState} from "react";
import { useDispatch } from "react-redux"; 
import { backedActions, modalActions } from "../store/index";
import Button from "./UI/Button";
import classes from "./styles/PledgeBar.module.css"
const PledgeBar = ({data}) => {
    const dispatch = useDispatch(); 
    const [inputValue, setInputValue] = useState(data.pledgeMin); 

    const changeInputValue = (e) => {
        setInputValue(e.target.value); 
        
    }

    if(inputValue > data.pledgeMax){
        setInputValue(data.pledgeMax)
    }

    const updateBackedHandler= () => {
        dispatch(backedActions.updateAmount(inputValue))
        dispatch(backedActions.updateBackers())
        dispatch(modalActions.showThanksModal())
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }

    const updateBackersHandler = () => {
        dispatch(backedActions.updateBackers())
        dispatch(modalActions.showThanksModal())
    }
    let content; 
    if(data.id){
        content = <Button onClick={updateBackersHandler}>Continue</Button>
    } else{
        content = <div className={classes.content}>
            <p className={classes.enter}>Enter your pledge</p>
            <div className={classes.flexContainer}>
                <div className={classes.input}>$<input type="number" min={data.pledgeMin} max={data.pledgeMax} value={inputValue} onChange={changeInputValue}/> </div>
                <Button onClick={updateBackedHandler}>Continue</Button>
            </div>
        </div>
    }
  return <div className={classes.pledgeBar}>
    <div className={classes.separator}/>
    {content}
  </div>;
};

export default PledgeBar;
