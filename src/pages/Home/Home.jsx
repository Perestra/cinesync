import React from 'react'
import styles from './Home.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'
import BlockBusters from 'src/components/BlockBusters/BlockBusters';

import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Home = () => {

  return (
    <div className={ styles.home }>
      <Header content='visible' />
      <section className={ styles.home__sectionData }>
        <div className={ styles.home__filmData }>
          <img src="" alt="Logo do filme" />
          <Text className='white' text='Miles Morales retorna para o próximo capítulo da saga do Aranhaverso, uma aventura épica que transportará o Homem-Aranha em tempo integral e amigável do bairro do Brooklyn através do Multiverso para unir forças com Gwen Stacy.' />
          <div className={ styles.home__buttons }>
              <Button btnClassName={ styles.home__btnPlay } txtClassName='white' title='Reproduzir' type='button' icon={<IoPlayCircleOutline className={ styles.home__iconPlay } />} />
              <Button btnClassName={ styles.home__btnKnowMore } txtClassName='black' title='Saiba mais' type='button' icon={<IoMdInformationCircleOutline className={ styles.home__iconKnowMore } />} />
          </div>   
        </div>
      </section>
      <main className={ styles.home__main }>
        <BlockBusters posterTitle='Populares da semana' url='/trending/all/week' />
        <BlockBusters posterTitle='Filmes populares' url='/trending/movie/week' />
        <BlockBusters posterTitle='Séries populares' url='/trending/tv/week' />
      </main>
    </div>
  )
}

export default Home