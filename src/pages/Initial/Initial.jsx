import React from 'react'
import styles from './Initial.module.scss'

import Header from 'src/components/Header/Header'
import Button from 'src/components/Button/Button'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Text from 'src/components/Text/Text'

import yourWay from 'src/assets/images/yourWay.png'
import { IoIosLaptop } from 'react-icons/io'
import { SlScreenDesktop } from 'react-icons/sl'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'

const Initial = () => {

  const devices = [
    {pc:["MacOS", "PC Windows"]},
    {tv:["Fire TV", "Android TV", "Apple TV", "Chromecast"]},
    {cel:["Celulares e Tablets Android","iPhone e iPad"]}
  ]

  return (
    <div className={ styles.initial }>
      <div className={ styles.initial__header }>
        <Header />
        <div className={ styles.initial__presentation }>
          <h1 className={ styles.initial__title }>Seu cinema, sua sincronia. <br/> Tudo o que você ama, onde você estiver.</h1>
          <Button className={ styles.initial__button } type='button' title='Entrar com a minha conta' />
        </div>
      </div>
      <main className={ styles.initial__main }>
        <section className={ styles.initial__yourWay }>
          <div className={ styles.initial__description }>
            <Subtitle text='Assista do seu jeito'/>
            <Text text='Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer.'/>  
          </div>
          <img 
            className={ styles.initial__image }
            src={ yourWay } 
            alt="Uma mão segurando um controle de televisão e na frente diversos retângulos com cenas de filme.">
          </img>
        </section>
        <section className={ styles.initial__availability }>
          <Subtitle text="Disponível nos seus dispositivos favoritos"/>
          <div className={ styles.initial__devices}>
            <div className={ styles.initial__device }>
              <IoIosLaptop className={ styles.initial__icons } />
              <div className={ styles.initial__gadgets }>
                {devices[0].pc.map( (device, index) => <Text key={ index } text={ device }/> )}
              </div>
            </div>
            <div className={ styles.initial__device }>
              <SlScreenDesktop className={ styles.initial__icons } />
              <div className={ styles.initial__gadgets }>
                {devices[1].tv.map( (device, index) => <Text key={ index } text={ device }/> )}
              </div>
            </div>
            <div className={ styles.initial__device }>
              <HiOutlineDevicePhoneMobile className={ styles.initial__icons } />
              <div className={ styles.initial__gadgets }>
                {devices[2].cel.map( (device, index) => <Text key={ index } text={ device }/> )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Initial