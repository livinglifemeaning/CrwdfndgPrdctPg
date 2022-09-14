import Modal from "./UI/Modal"

import CloseModal from "../assets/closeModal.svg"; 

import classes from "./styles/RewardModal.module.css"; 
import RewardsContainer from "./RewardsContainer";
const RewardModal = (props) => {
  return (
   <Modal onClose={props.onClose}>
    <div className={classes.top}>
    <p className={classes.backProject}>Back this project</p>
    <img src={CloseModal} alt="Close modal" onClick={props.onClose}/>
    </div>
    <p className={classes.support}> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
    <RewardsContainer parent="RewardModal"/>
    </Modal>
  )
}

export default RewardModal;
