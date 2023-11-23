import React from 'react'
import styles from './Text.module.scss'

const Text = ({ className, animation, text }) => {
  return (
    <p className={ `${styles[className]} ${styles[animation]}` }>{ text }</p>
  )
}

export default Text