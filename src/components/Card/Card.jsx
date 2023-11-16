import React from 'react'
import styles from './Card.module.scss'

const Card = ({ align, src, alt }) => {
  return (
    <div className={ `${ styles[align] }`}>
        <img className={ styles.image } src={ src } alt={ alt } />
    </div>
  )
}

export default Card