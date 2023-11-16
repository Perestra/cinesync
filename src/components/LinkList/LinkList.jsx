import React from 'react'
import styles from './LinkList.module.scss'

import { NavLink } from 'react-router-dom'

const LinkList = ({ to, Icon, title }) => {

  const activeStyle = {
    color: '#ED8423',
    transition: 'all ease-in-out 0.2s'
}

  return (
    <li className={ styles.list }>
      <NavLink 
        to={ to }
        className={ styles.list__navlink } 
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        <Icon className={ styles.list__icon } />
        <p className={ styles.list__text }>{ title }</p>  
      </NavLink>
    </li>
  )
}

export default LinkList