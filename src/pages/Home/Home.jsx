import React, { useState } from 'react'
import styles from './Home.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import BlockBusters from 'src/components/BlockBusters/BlockBusters';
import HighlightFilm from 'src/components/HighlightFilm/HighlightFilm';

import { useAuthContext } from 'src/hooks/useAuthContext';

const Home = () => {

  const { authUser } = useAuthContext()

  const [ filmData, setFilmData ] = useState({
    id:872585, 
    title: 'Oppenheimer',
    media:'movie', 
    backdrop:'/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'
  })

  const getFilmData = (id, title, media, backdrop ) => {
    setFilmData({id, title, media, backdrop })
    window.scrollTo(0,0)
  }

  const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
  const backDropBaseURL = 'https://image.tmdb.org/t/p/original'

  return (
    <div className={ styles.home }>
      <div className={ styles.home__backdrop }>
        <img src={`${backDropBaseURL}${filmData.backdrop}`} alt={`Plano de fundo de ${filmData.title}`} />
      </div>
      <div className={ styles.home__filmData }>
        <Header content='visible' username={ authUser.username } />
        <HighlightFilm filmData={filmData} />
      </div>
      <main className={ styles.home__main }>
        <BlockBusters posterBaseURL={posterBaseURL} posterTitle='Populares da semana' url='/trending/all/week' getFilmData={ getFilmData } />
        <BlockBusters posterBaseURL={posterBaseURL} posterTitle='Filmes populares' url='/trending/movie/week' getFilmData={ getFilmData } />
        <BlockBusters posterBaseURL={posterBaseURL} posterTitle='Séries populares' url='/trending/tv/week' getFilmData={ getFilmData } />
      </main>
    </div>
  )
}

export default Home