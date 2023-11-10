import React from 'react'
import styles from './Subtitle.module.scss'

const Subtitle = ({ text, color }) => {
  return (
    <h2 className={ `${styles.subtitle} ${styles[color]}` }>{ text }</h2>
  )
}

export default Subtitle