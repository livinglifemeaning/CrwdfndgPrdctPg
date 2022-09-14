import React from "react";
import classes from "../styles/HamburgerMenu.module.css"
const HamburgerMenu = (props) => {
  return (
    <div
      className={`${classes.menuBtn} ${props.navOpen ? classes.open : ""}`}
      onClick={props.onClick}
    >
      <div className={classes.menuBtnBurger}></div>
    </div>
  );
};

export default HamburgerMenu;
