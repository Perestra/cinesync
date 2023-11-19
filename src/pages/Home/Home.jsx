import React, { useState } from 'react'
import styles from './Home.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import BlockBusters from 'src/components/BlockBusters/BlockBusters';
import HighlightFilm from 'src/components/HighlightFilm/HighlightFilm';

const Home = () => {

  const infoHighlight = (id, title, overview, backdrop_path, media_type) => [{
    id,
    title,
    overview,
    backdrop_path,
    media_type
  }]

  const [ mainBlockBuster, setMainBlockBuster ] = useState(infoHighlight(
    872585, 
    'Oppenheimer',
    'A história do físico americano J. Robert Oppenheimer, seu papel no Projeto Manhattan e no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial, e o quanto isso mudaria a história do mundo para sempre.',
    "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    'movie'
  ))
  
  const getBlockBusterData = (id, title, overview, backdrop_path, media_type) => {
    setMainBlockBuster(infoHighlight(id, title, overview, backdrop_path, media_type))
  }

  return (
    <div className={ styles.home }>
      <Header content='visible' />
      <HighlightFilm mainBlockBuster={ mainBlockBuster } />
      <main className={ styles.home__main }>
        <BlockBusters posterTitle='Populares da semana' url='/trending/all/week' getBlockBusterData={ getBlockBusterData } />
        <BlockBusters posterTitle='Filmes populares' url='/trending/movie/week' getBlockBusterData={ getBlockBusterData } />
        <BlockBusters posterTitle='Séries populares' url='/trending/tv/week' getBlockBusterData={ getBlockBusterData } />
      </main>
    </div>
  )
}

export default Home