import React from 'react'
import styles from './LinkList.module.scss'

import { NavLink } from 'react-router-dom'

const LinkList = ({ to, title, onClick }) => {

  const activeStyle = {
    color: 'var(--primaryOrange)',
    fontWeight: 600,
    letterSpacing: '0.7px',
    transition: 'all ease-in-out 0.2s'
  }

  return (
    <li className={ styles.list }>
      <NavLink 
        to={ to }
        className={ styles.list__navLink } 
        style={({ isActive }) => isActive ? activeStyle : undefined}
        onClick={ onClick }
      >
        { title }
      </NavLink>
    </li>
  )
}

export default LinkList