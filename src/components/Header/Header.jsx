import React, { useState } from 'react';
import styles from './Header.module.scss'

import NavList from 'src/components/NavList/NavList';
import UserMenu from 'src/components/UserMenu/UserMenu';

import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = ({ display, content, username }) => {

  const [ userMenu, setUserMenu ] = useState(false)
  const [ activeMenu, setActiveMenu ] = useState(false)

  const openMenu = () => {
    setActiveMenu(!activeMenu)
    window.scrollTo(0,0)
    if(activeMenu){
      window.document.body.classList.remove('scroll-lock')
    } else {
      window.document.body.classList.add('scroll-lock')
    }
  }

  return (
    <header className={ styles.header }>
      <div className={ `${styles.header__container}` }>
        <span>cineSync</span>
        <div className={ `${styles.header__nav} ${styles[display]} ${ activeMenu? styles.active: "" } `}>
          <NavList />
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
        { activeMenu? <HiX className={ styles.header__iconMenu } onClick={ () => openMenu() } />: <HiOutlineMenuAlt3 className={ styles.header__iconMenu } onClick={ () => openMenu() } /> }
      </div>
      
    </header>
  ) 
}

export default Header