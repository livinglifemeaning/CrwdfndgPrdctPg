import { useDispatch } from "react-redux";
import { modalActions } from "../store/index";

import Modal from "./UI/Modal";
import Check from "../assets/icon-check.svg";

import classes from "./styles/ThanksModal.module.css";
import Button from "./UI/Button";
const ThanksModal = (props) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(modalActions.hideThanksModal());
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.thanksModal}>
        <img src={Check} alt="Checkmark" />
        <p className={classes.thanks}>Thanks for your support! </p>
        <p className={classes.message}>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Button onClick={closeModalHandler}>Got it!</Button>
      </div>
    </Modal>
  );
};

export default ThanksModal;
