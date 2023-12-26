import React from 'react'
import styles from './BlockBusters.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from 'src/components/Card/Card'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Slider from 'react-slick'

const BlockBusters = ({ posterTitle, cards, posterBaseURL, setFilmData }) => {

    const sliderConfig = {
        infinite: false,
        arrows: true,
        swipeToSlide: true,
        lazyLoad: true,
        speed: 750,
        slidesToShow: 6.3,
        slidesToScroll: 1
    }

    const getFilmData = (id, title, media, backdrop, poster ) => {
        setFilmData({id, title, media, backdrop, poster })
        window.scrollTo(0,0)
    }
   
  return (
    <section className={ styles.blockbusters }>
        <Subtitle color='white' text={ posterTitle } />
        <Slider { ...sliderConfig }>
            { cards?.map( film => 
                <Card 
                    key={ film.id }
                    id={ film.id }
                    type={ film.media_type }
                    name={ film.title? film.title: film.name }
                    date={ film.release_date? film.release_date: film.first_air_date  }
                    src={`${posterBaseURL}${film.poster_path}`} 
                    alt={`Poster do filme ${film.title? film.title: film.name}`}
                    onClick={ () => getFilmData(film.id, film.title? film.title: film.name,  film.media_type, film.backdrop_path, film.poster_path) } 
                /> 
            )}
        </Slider>    
    </section>
  )
}

export default BlockBusters