import { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalActions, rewardActions} from "../store/index";

import Button from "./UI/Button";
import PledgeBar from "./PledgeBar";
import classes from "./styles/Reward.module.css";
const Reward = ({ data, parent }) => {
  const rewardIsSelected = useSelector((state) => state.reward.selectedReward);
  const thanksModalIsOpen = useSelector(state => state.modal.thanksModalOpen); 
  const dispatch = useDispatch();

  const rewardClickedHandler = () => {
    dispatch(modalActions.showRewardModal());
    dispatch(rewardActions.selectReward(data.title));
    if (data.title === "Bamboo Stand") {
      window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
    }
  };

  const [selectedReward, setSelectedReward] = useState("");

  const handleSelectedReward = () => {
    setSelectedReward(data.title);
    dispatch(rewardActions.selectReward(selectedReward))
  };

  const [remainingProducts, setRemainingProducts] = useState(data.remaining); 

  useEffect(() => {if(thanksModalIsOpen && (data.title === selectedReward || data.title === rewardIsSelected)){
    setRemainingProducts(prevState => prevState -1)

  }}, [data.remaining, thanksModalIsOpen, selectedReward, data.title, rewardIsSelected])

  
  let disabled;
  if (data.remaining === 0) {
    disabled = true;
  }

  let button;
  if (disabled) {
    button = <Button status="disabled">Out of Stock</Button>;
  } else {
    button = <Button onClick={rewardClickedHandler}>Select Reward</Button>;
  }

  return (
    <div
      className={`${classes.rewardCard} ${disabled ? classes.disabled : ""} ${
        data.id ? classes.noReward : ""
      }`}
      onChange={handleSelectedReward}
    >
      <div
        className={`${parent === "RewardModal" ? classes.optionBox : ""}`}
        id={data.title}
      >
        {parent === "RewardModal" &&
          !disabled &&
          rewardIsSelected === data.title && (
            <input type="radio" name="pledge" defaultChecked />
          )}

        {parent === "RewardModal" &&
          !disabled &&
          rewardIsSelected !== data.title && (
            <input type="radio" name="pledge" id={data.title} />
          )}
        {parent === "RewardModal" && disabled && (
          <input type="radio" name="pledge" disabled={true} />
        )}
        <label htmlFor={data.title}>
          <p className={classes.title}>{data.title}</p>
          {data.pledgeMin && (
            <p className={classes.pledge}>Pledge ${data.pledgeMin} or more</p>
          )}
        </label>
      </div>
      <p className={classes.desc}>{data.desc}</p>

      {data.remaining >= 0 && (
        <div className={classes.remaining}>
          <p className={classes.num}>{remainingProducts}</p>
          <p>left</p>
        </div>
      )}
      {parent === "AboutCard" && button}
      {(selectedReward === data.title || rewardIsSelected === data.title) &&
        parent === "RewardModal" && <PledgeBar data={data}/>}
    </div>
  );
};

export default Reward;
