import {useState, useEffect} from "react"; 
import { useSelector } from "react-redux";
import Reward from "./Reward";
import rewards from "../assets/rewardsData.json";
import classes from "./styles/RewardsContainer.module.css";
const noReward = {title:"Pledge with no reward", desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.", id: "No Reward"}

const RewardsContainer = (props) => {
  const rewardIsSelected = useSelector((state) => state.reward.selectedReward);
  const thanksModalIsOpen = useSelector(state => state.modal.thanksModalOpen); 
  const [rewardData, setRewardData] = useState(rewards); 

    useEffect(() => {if(thanksModalIsOpen){
      for(let i = 0; i < rewards.length; i++){
        if(rewards[i].title === rewardIsSelected){
           rewards[i].remaining -= 1
           setRewardData(rewards)
        }
      }
    }}, [rewardIsSelected, thanksModalIsOpen])

    console.log(rewardData, rewardIsSelected)
  return (
    <div className={classes.rewardContainer}>
        {props.parent ==="RewardModal" && <Reward data={noReward} parent={props.parent}/>}
      {rewardData.map((reward) => (
        <Reward data={reward} parent={props.parent} key={reward.title}/>
      ))}
    </div>
  );
};

export default RewardsContainer;
