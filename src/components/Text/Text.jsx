import React from 'react'
import styles from './Text.module.scss'

const Text = ({ text }) => {
  return (
    <p className={ styles.text }>{ text }</p>
  )
}

export default Text