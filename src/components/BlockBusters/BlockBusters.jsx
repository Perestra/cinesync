import React from 'react'
import styles from './BlockBusters.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from 'src/components/Card/Card'
import Subtitle from 'src/components/Subtitle/Subtitle'
import tmdb from 'src/api/tmdbApi';
import Slider from 'react-slick'
import { useAxios } from 'src/hooks/useAxios';

const BlockBusters = ({ posterTitle, url }) => {

    const sliderConfig = {
        infinite: false,
        arrows: true,
        swipeToSlide: true,
        lazyLoad: true,
        speed: 750,
        slidesToShow: 6.3,
        slidesToScroll: 1
    }

    const { data, isLoading, error } = useAxios(tmdb,'get', url)
    const imgBaseURL = 'https://image.tmdb.org/t/p/w500/'

  return (
    <section className={ styles.blockbusters }>
        <Subtitle color='white' text={ posterTitle } />
            <Slider { ...sliderConfig }>
                { data.map( (item, index) => 
                    <Card 
                        key={ index }
                        src={`${imgBaseURL}${item.poster_path}`} 
                        alt={`Poster do filme ${item.title}`}
                    />
                )}
            </Slider>       
    </section>
  )
}

export default BlockBusters