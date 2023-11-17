import React from 'react'
import styles from './Card.module.scss'

const Card = ({ src, alt }) => {
  return (
    <div className={ styles.card }>
      <img className={ styles.card__image } src={ src } alt={ alt } />
    </div>
  )
}

export default Card