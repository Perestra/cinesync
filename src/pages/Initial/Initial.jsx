import React from 'react'
import styles from './Initial.module.scss'

import Header from 'src/components/Header/Header'
import Button from 'src/components/Button/Button'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Text from 'src/components/Text/Text'

import yourWay from 'src/assets/images/yourWay.png'
import laptop  from 'src/assets/images/laptop.png'
import television  from 'src/assets/images/television.png'
import control  from 'src/assets/images/control.png'
import cellphone  from 'src/assets/images/cellphone.png'

import { useNavigate } from 'react-router-dom'

const Initial = () => {

  const devices = [
    {
      name: 'televisão',
      devices:["Fire TV", "Android TV", "Apple TV", "Chromecast"],
      img: television
    },
    {
      name: 'laptop',
      devices:["MacOS", "PC Windows"],
      img: laptop
    },
    {
      name: 'controle de videogame',
      devices:["PlayStation","Xbox"],
      img: control
    },
    {
      name: 'celular',
      devices:["Celulares e Tablets Android","iPhone e iPad"],
      img: cellphone
    }
  ]

  const navigate = useNavigate()

  return (
    <div className={ styles.initial }>
      <div className={ styles.initial__header }>
        <Header display='nonVisible' />
        <div className={ styles.initial__presentation }>
          <h1 className={ styles.initial__title }>Seu cinema, sua sincronia. <br/> Tudo o que você ama, onde você estiver.</h1>
          <Button btnClassName={ styles.initial__button } txtClassName='white' title='Entrar com a minha conta' type='button' onClick={ () => navigate("/login") } />
        </div>
      </div>
      <main className={ styles.initial__main }>
        <section className={ styles.initial__yourWay }>
          <div className={ styles.initial__description }>
            <Subtitle text='Assista do seu jeito' color='white'/>
            <Text className='gray' text='Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer.'/>  
          </div>
          <img 
            className={ styles.initial__image }
            src={ yourWay } 
            alt="Uma mão segurando um controle de televisão e na frente diversos retângulos com cenas de filme.">
          </img>
        </section>
        <section className={ styles.initial__availability }>
          <Subtitle text="Disponível nos seus dispositivos favoritos" color='white'/>
          <div className={ styles.initial__devices}>
            { devices.map( (item, index) => 
              <div key={index} className={ styles.initial__device }>
                <img src={ item.img } alt={ `Imagem de ${item.name}` } className={ styles.initial__icons } />
                <div className={ styles.initial__gadgets }>
                  {item.devices.map( (device, index) => <Text className='gray' key={ index } text={ device }/> )}
                </div>
              </div>
            ) }
          </div>
        </section>
      </main>
    </div>
  )
}

export default Initial