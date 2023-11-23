import React from 'react'
import styles from './BlockBusters.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from 'src/components/Card/Card'
import Subtitle from 'src/components/Subtitle/Subtitle'
import tmdb from 'src/api/tmdbApi';
import Slider from 'react-slick'
import { useAxios } from 'src/hooks/useAxios';

const BlockBusters = ({ posterTitle, url, posterBaseURL, getFilmData }) => {

    const sliderConfig = {
        infinite: false,
        arrows: true,
        swipeToSlide: true,
        lazyLoad: true,
        speed: 750,
        slidesToShow: 6.3,
        slidesToScroll: 1
    }

    const { results, isLoading, error } = useAxios(tmdb,'get', url)

  return (
    <section className={ styles.blockbusters }>
        <Subtitle color='white' text={ posterTitle } />
            <Slider { ...sliderConfig }>
                { results.map( film => 
                    <Card 
                    key={ film.id }
                    src={`${posterBaseURL}${film.poster_path}`} 
                    alt={`Poster do filme ${film.title}`}
                    onClick={ () => getFilmData(film.id, film.media_type, film.backdrop_path) }
                    /> 
                )}
            </Slider>       
    </section>
  )
}

export default BlockBusters