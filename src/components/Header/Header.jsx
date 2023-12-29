import React, { useState } from 'react';
import styles from './Header.module.scss'

import NavList from 'src/components/NavList/NavList';
import UserMenu from 'src/components/UserMenu/UserMenu';

import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = ({ display, content, username }) => {

  const [ userMenu, setUserMenu ] = useState(false)
  const [ activeMenu, setActiveMenu ] = useState(false)

  const menuStatus = () => {
    setActiveMenu(!activeMenu)
    window.scrollTo(0,0)
    if(activeMenu) {
      window.document.body.classList.remove('scroll-lock')
    } else {
      window.document.body.classList.add('scroll-lock')
    }
  }

  return (
    <header className={ styles.header }>
      <div className={ `${styles.header__container}` }>
        <a href='/inicio'>cineSync</a>
        <div className={ `${styles.header__nav} ${styles[display]} ${ activeMenu? styles.active: "" } `}>
          <NavList onClick={ () => menuStatus() } />
          <div className={ styles.header__userConfig }>
            <div className={ styles.header__user }>
              <span>{ username }</span>
              <IoIosArrowDown 
                className={ `${styles.header__userIcon} ${styles[display]} ${styles[content]} ${ userMenu? styles.rotate: '' }` }
                onClick={ () => setUserMenu(!userMenu) } 
              />    
            </div>
            <UserMenu 
              menu={ userMenu? 'openMenu': ''} 
              container ={userMenu? 'displayContent': ''} 
            />
          </div>  
        </div>
        { activeMenu? <HiX className={ styles.header__iconMenu } onClick={ () => menuStatus() } />: <HiOutlineMenuAlt3 className={ styles.header__iconMenu } onClick={ () => menuStatus() } /> }
      </div>
      
    </header>
  ) 
}

export default Header