import {useState} from 'react'
import { useSelector } from 'react-redux';
import useMediaQuery from '../hooks/useMediaQuery';

import HamburgerMenu from './UI/HamburgerMenu'
import NavLink from "./UI/Navlink"; 

import classes from "./styles/Nav.module.css"
const Nav = () => {
  const isDesktop = useMediaQuery('(min-width: 750px)')
  const modalIsOpen = useSelector(state => state.modal.rewardModalOpen)
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(prevState => !prevState)
  }

  if((modalIsOpen && navOpen) || (isDesktop && navOpen)){
    setNavOpen(false)
  }

  return (
    <div className={classes.nav}>
      {!isDesktop && <HamburgerMenu onClick={toggleNav} navOpen={navOpen}/>}
      {navOpen && 
      <>
      <div className={classes.background}></div>
      <ul className={`${classes.navBox} ${classes.mobile} `}>
        <NavLink link="About"/>
        <NavLink link="Discover"/>
        <NavLink link="Get Started"/>
      </ul>
      </>}
      {isDesktop &&
        <ul className={`${classes.navBox} ${classes.desktop} `}>
        <NavLink link="About"/>
        <NavLink link="Discover"/>
        <NavLink link="Get Started"/>
      </ul>
      }
    </div>
  )
}

export default Nav
