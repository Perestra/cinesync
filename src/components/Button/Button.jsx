import React from 'react'
import styles from './Button.module.scss'

const Button = ({ title }) => {
  return (
    <button type="button" className={ styles.button }>
        <p className={ styles.button__text }>{ title }</p>
    </button>
  )
}

export default Button