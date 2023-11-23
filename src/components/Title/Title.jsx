import React from 'react'
import styles from './Title.module.scss'

const Title = ({ text, animation }) => {
  return (
    <h1 className={ `${styles.title} ${styles[animation]}` }>{ text }</h1>
  )
}

export default Title