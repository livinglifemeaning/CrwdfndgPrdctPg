import {useSelector, useDispatch} from "react-redux"; 
import { modalActions } from "./store/index";

import Header from "./components/Header";
import ProjectBackers from "./components/ProjectBackers";
import ProjectDescription from "./components/ProjectDescription";
import AboutCard from "./components/AboutCard";
import RewardModal from "./components/RewardModal";
import ThanksModal from "./components/ThanksModal";

function App() {
  const dispatch = useDispatch(); 
  const rewardModalIsOpen = useSelector(state => state.modal.rewardModalOpen); 
  const thanksModalIsOpen = useSelector(state => state.modal.thanksModalOpen)
  const hideRewardModalHandler = () =>{
    dispatch(modalActions.hideRewardModal()); 
  }
  const hideThanksModalHandler = () =>{
    dispatch(modalActions.hideThanksModal()); 
  }
  return (
    <>
    {rewardModalIsOpen && <RewardModal onClose={hideRewardModalHandler}/>}
    {thanksModalIsOpen && <ThanksModal onClose={hideThanksModalHandler}/>}
      <Header/>
      <div className="cardContainer">
      <ProjectDescription /> 
      <ProjectBackers />
      <AboutCard/>
      </div>
    </>
  );
}

export default App;
