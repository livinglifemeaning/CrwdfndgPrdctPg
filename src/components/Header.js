import useMediaQuery from "../hooks/useMediaQuery"; 
import Logo from "./UI/Logo"; 
import Nav from "./Nav"; 
import HeaderImgMobile from '../assets/image-hero-mobile.jpg' 
import HeaderImgDesktop from "../assets/image-hero-desktop.jpg" 

import classes from  "./styles/Header.module.css"; 
const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 750px)'); 
  return (
    <div className={classes.header}>
      <img src={isDesktop ? HeaderImgDesktop : HeaderImgMobile} alt="Bamboo monitor riser" className={classes.headerImg}/>
      <div className={classes.content}>
        <Logo/>
        <Nav/>
      </div>
    </div>
  )
}

export default Header; 
