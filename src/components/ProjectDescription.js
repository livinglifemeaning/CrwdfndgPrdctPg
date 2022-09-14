import { useState } from "react";
import {useDispatch} from "react-redux"; 
import { modalActions } from "../store/index";
import useMediaQuery from "../hooks/useMediaQuery";

import Card from "./UI/Card";
import Button from "./UI/Button";

import MastercraftLogo from "../assets/mastercraft.svg";
import Bookmark from "../assets/icon-bookmark.svg";
import Bookmarked from "../assets/icon-bookmarked.svg";

import classes from "./styles/ProjectDescription.module.css";

const ProjectDescription = () => {
  const isDesktop = useMediaQuery('(min-width: 750px)')
  const dispatch = useDispatch(); 

  const [markedBookmark, setMarkedBookmark] = useState(false);
 
  const showRewardModalHandler = () =>{
    dispatch(modalActions.showRewardModal()); 
  }
  const toggleMarkBookmark = () => {
    setMarkedBookmark((prevState) => !prevState);
  };

  return (
    <>
      <Card>
        <div className={classes.card}>
        <div className={classes.logo}>
          <img src={MastercraftLogo} alt="" />
        </div>
        <h1 className={classes.title}>Mastercraft Bamboo Monitor Riser</h1>
        <p className={classes.desc}>
          A beautiful &amp; handcrafted monitor stand to reduce neck and eye
          strain.
        </p>
        <div className={classes.flexContainer}>
          <Button onClick={showRewardModalHandler}>Back this project</Button>
          <div className={classes.bookmark} onClick={toggleMarkBookmark}>
            <img src={markedBookmark ? Bookmarked : Bookmark} alt="Bookmark" />
            {isDesktop && !markedBookmark && <div className={classes.dsktopBookmark}>Bookmark</div>}
            {isDesktop && markedBookmark && <div className={classes.dsktopBookmarked}>Bookmarked</div>}
          </div>
        </div>
        </div>
      </Card>
   
      </>
  );
};

export default ProjectDescription;
