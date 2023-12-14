import React from 'react'
import styles from './ProfileCard.module.scss'

import Text from 'src/components/Text/Text'

const ProfileCard = ({ src, alt, text }) => {

  return (
    <div className={ styles.card }>
      <img src={ src } alt={ `Foto de perfil de ${alt}` } />
      <Text text={ text } className='gray' />
    </div>
  )
}

export default ProfileCard