import React from 'react'
import styles from './Text.module.scss'

const Text = ({ className, text }) => {
  return (
    <p className={ `${styles[className]}` }>{ text }</p>
  )
}

export default Text