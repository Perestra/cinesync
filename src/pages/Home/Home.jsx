import React, { useState } from 'react'
import styles from './Home.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import BlockBusters from 'src/components/BlockBusters/BlockBusters';
import HighlightFilm from 'src/components/HighlightFilm/HighlightFilm';
import tmdb from 'src/api/tmdbApi';

import { useAxios } from 'src/hooks/useAxios';


const Home = () => {

  const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
  const backDropBaseURL = 'https://image.tmdb.org/t/p/original'

  const [ filmData, setFilmData ] = useState({
    id:872585, 
    media:'movie', 
    backdrop:'/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'
  })

  const getFilmData = (id, media, backdrop) => {
    setFilmData({id, media, backdrop})
  }

  const { data, isLoading, error } = useAxios(tmdb, 'get', `/${filmData.media}/${filmData.id}`)

  return (
    <div className={ styles.home }>
      <div className={ styles.home__backdrop }>
        <img src={`${backDropBaseURL}${filmData.backdrop}`} alt={`Plano de fundo do filme ${filmData.title}`} />
        </div>
      <div className={ styles.home__filmData }>
        <Header content='visible' />
        <HighlightFilm data={data} filmData={filmData} />
      </div>
      <main className={ styles.home__main }>
        { !isLoading && <BlockBusters posterBaseURL={posterBaseURL} posterTitle='Populares da semana' url='/trending/all/week' getFilmData={ getFilmData } />}
        <BlockBusters posterBaseURL={posterBaseURL} posterTitle='Filmes populares' url='/trending/movie/week' getFilmData={ getFilmData } />
        <BlockBusters posterBaseURL={posterBaseURL} posterTitle='Séries populares' url='/trending/tv/week' getFilmData={ getFilmData } />
      </main>
    </div>
  )
}

export default Home