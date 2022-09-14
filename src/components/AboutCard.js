import React from "react";
import Card from "./UI/Card";

import classes from "./styles/AboutCard.module.css"; 
import RewardsContainer from "./RewardsContainer";
const AboutCard = () => {
  return (
    <Card>
        <div className={classes.card}>
      <h3 className={classes.about}>About this project</h3>
      <p className={classes.projectDesc}>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className={classes.projectDesc}>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>

      <RewardsContainer parent="AboutCard"/>
      </div>
    </Card>
  );
};

export default AboutCard;
