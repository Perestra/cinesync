import React, { useState } from 'react'
import styles from './Home.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import BlockBusters from 'src/components/BlockBusters/BlockBusters';
import HighlightFilm from 'src/components/HighlightFilm/HighlightFilm';

import { useAuthContext } from 'src/hooks/useAuthContext';
import { getAPIData } from 'src/helper/getAPIData';

const Home = () => {

  const { authUser } = useAuthContext()

  const [ filmData, setFilmData ] = useState({
    id:872585, 
    title: 'Oppenheimer',
    media:'movie', 
    backdrop:'/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    poster: '/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg'
  })

  const all = getAPIData('/trending/all/week').results 
  const movie = getAPIData('/trending/movie/week' ).results 
  const tv = getAPIData('/trending/tv/week').results 

  const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
  const backDropBaseURL = 'https://image.tmdb.org/t/p/original'

  return (
    <div className={ styles.home }>
      <div className={ styles.home__backdrop }>
        <img src={`${backDropBaseURL}${filmData.backdrop}`} alt={`Plano de fundo de ${filmData.title}`} />
      </div>
      <div className={ styles.home__filmData }>
        <Header username={ authUser.username } />
        <HighlightFilm filmData={filmData} />
      </div>
      <main className={ styles.home__main }>
        <BlockBusters
          cards={ all } 
          posterBaseURL={posterBaseURL} 
          posterTitle='Populares da semana'
          setFilmData={ setFilmData } 
        />
        <BlockBusters
          cards={ movie } 
          posterBaseURL={posterBaseURL} 
          posterTitle='Filmes populares'
          setFilmData={ setFilmData } 
        />
        <BlockBusters
          cards={ tv } 
          posterBaseURL={posterBaseURL} 
          posterTitle='Séries populares'
          setFilmData={ setFilmData } 
        />
      </main>
    </div>
  )
}

export default Home