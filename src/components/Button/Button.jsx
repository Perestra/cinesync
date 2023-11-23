import React from 'react'
import styles from './Button.module.scss'

const Button = ({ type, btnClassName, txtClassName, onClick, href, target, title, icon }) => {
  return (
    <button type={ type } className={ `${btnClassName}` } onClick={ onClick }>
      { icon }
      <a 
        className={`${styles[txtClassName]}`}
        href={href} 
        target={target}
        rel="noopener noreferrer"
        referrerPolicy="no-referrer-when-downgrade"
      >
        { title }
      </a>
    </button>
  )
}

export default Button