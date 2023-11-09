import React from 'react'
import styles from './Footer.module.scss'

import logoColored from 'src/assets/svg/logoColored.svg'
import Text from 'src/components/Text/Text'

const Footer = () => {

    const socialMedias = [
        {name:"Instagram",
        link:"https://www.instagram.com/daniilo.ps/"},
        {name:"GitHub",
        link:"https://github.com/Perestra?tab=repositories"},
        {name:"LinkedIn",
        link:"https://www.linkedin.com/in/danilo-perestrelo-silva-13814968/"}
    ]

  return (
    <footer className={ styles.footer }>
        <img src={ logoColored } alt="Logo Cinesync colorido com um degrade alaranjado" />
        <div className={ styles.footer__socialMedia }>
            { socialMedias.map((media, index) => 
                <a 
                key={ index }
                href={ media.link } 
                target="_blank" 
                rel="noopener noreferrer"
                ><Text className='white' text={ media.name } />
                </a>
            )}
        </div>
        <Text className='white' text='© CineSync. Desenvolvido por Danilo Perestrelo' />
    </footer>
  )
}

export default Footer