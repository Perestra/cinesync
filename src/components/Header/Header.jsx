import React from 'react';
import styles from './Header.module.scss'

import NavList from 'src/components/NavList/NavList';
import { IoIosArrowDown } from "react-icons/io";

const Header = ({ display, content, username }) => {
  return (
    <header className={ styles.header }>
      <div className={ `${styles.header__container} ${styles[content]} ` }>
        <span>cineSync</span>
        <div className={ `${styles.header__nav} ${styles[display]}` }>
          <NavList />
        </div>
        <div className={ styles.header__user }>
          <span>{ username }</span>
          <IoIosArrowDown className={ `${styles.header__userIcon} ${styles[display]}` } />
        </div>
      </div>
    </header>
  ) 
}

export default Header