import React from 'react';
import styles from './Header.module.scss'

import logoWhite from 'src/assets/svg/logoWhite.svg';
import NavList from 'src/components/NavList/NavList';

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className={ styles.header__container }>
        <img className={ styles.header__logo } src={ logoWhite } alt='Logo da CineSync na cor branca' />
        <div className={ styles.header__nav }>
          <NavList />
        </div>
      </div>
    </header>
  )
}

export default Header