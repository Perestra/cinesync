import React, { useState } from 'react';
import styles from './Header.module.scss'

import NavList from 'src/components/NavList/NavList';
import UserMenu from 'src/components/UserMenu/UserMenu';

import { IoIosArrowDown } from "react-icons/io";

const Header = ({ display, content, username }) => {

  const [ userMenu, setUserMenu ] = useState(false)

  return (
    <header className={ styles.header }>
      <div className={ `${styles.header__container}` }>
        <span>cineSync</span>
        <div className={ `${styles.header__nav} ${styles[display]}` }>
          <NavList />
        </div>
        <div className={ styles.header__user }>
          <span>{ username }</span>
          <IoIosArrowDown 
            className={ `${styles.header__userIcon} ${styles[display]} ${styles[content]} ${ userMenu? styles.rotate: '' }` }
            onClick={ () => setUserMenu(!userMenu) } 
          />
        </div>
      </div>
      <UserMenu 
        menu={ userMenu? 'openMenu': ''} 
        container ={userMenu? 'displayContent': ''} 
      />
    </header>
  ) 
}

export default Header