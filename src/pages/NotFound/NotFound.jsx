import React from 'react'
import styles from './NotFound.module.scss'

import Header from 'src/components/Header/Header'
import Title from 'src/components/Title/Title'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'
import john  from 'src/assets/images/notFound.gif'

import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <div className={ styles.notFound }>
        <Header display='nonVisible' />
        <main className={ styles.notFound__main }>
            <section className={ styles.notFound__section }>
                <div className={ styles.notFound__content }>
                    <div className={ styles.notFound__title }>
                        <Title text='404' />
                        <Text text='Eu pensava que essa página estaria aqui também...' className='white'/>
                    </div>   
                    <Button 
                        btnClassName={ styles.notFound__btn } 
                        txtClassName='white' 
                        title='Voltar' 
                        onClick={ () => navigate(-1) }
                    />    
                </div>
                <div className={ styles.notFound__image }>
                    <img src={ john } alt="Meme do John Travolta procurando algo" />
                </div>
            </section>
        </main>
    </div>
  )
}

export default NotFound