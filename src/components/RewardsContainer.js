import Reward from "./Reward";
import rewards from "../assets/rewardsData.json";
import classes from "./styles/RewardsContainer.module.css";
const noReward = {title:"Pledge with no reward", desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.", id: "No Reward"}

const RewardsContainer = (props) => {
    
  return (
    <div className={classes.rewardContainer}>
        {props.parent ==="RewardModal" && <Reward data={noReward} parent={props.parent}/>}
      {rewards.map((reward) => (
        <Reward data={reward} parent={props.parent} key={reward.title}/>
      ))}
    </div>
  );
};

export default RewardsContainer;
