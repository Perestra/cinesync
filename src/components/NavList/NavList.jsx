import React from 'react'
import styles from './NavList.module.scss'

import LinkList from 'src/components/LinkList/LinkList'

const NavList = () => {

  const listHeader = [ "inicio", "minha lista", "filmes", "series" ]
  
  return (
    <nav className={ styles.nav }>
        <ul className={ styles.nav__ul }>
           { listHeader.map( (item,index) => <LinkList key={ index } to={ item.split(' ').join('') } title={item.toUpperCase() } />) }
        </ul>
    </nav>
  )
}

export default NavList