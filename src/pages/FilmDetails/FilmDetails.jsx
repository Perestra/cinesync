import React from 'react'
import styles from './FilmDetails.module.scss'

import Header from 'src/components/Header/Header'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Text from 'src/components/Text/Text'
import Title from 'src/components/Title/Title'
import tmdb from 'src/api/tmdbApi'

import { useAxios } from 'src/hooks/useAxios'
import { movieDate, runTime } from 'src/helper/modifyDatas'
import { useParams } from 'react-router-dom'

const FilmDetails = () => {

    const params = useParams() 
    const filmId = params.id

    const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
    const backDropBaseURL = 'https://image.tmdb.org/t/p/original'

    const { data } = useAxios(tmdb, 'get', `/movie/${filmId}`)

  return (
    <div className={ styles.filmDetails }>
        <div className={ styles.filmDetails__backdrop }>
            { data.backdrop_path && <img src={ `${backDropBaseURL}${data.backdrop_path}` } alt={`Plano de fundo de ${data.title}`} />}
        </div>
        <div className={ styles.filmDetails__data }>
            <Header content='visible' username='Danilo' />
            <section className={ styles.filmDetails__highlight }>
                <Title text={ data.title } animation='tilt-in-left-1' />
                <div className={ styles.filmDetails__genres }>
                    { data?.genres?.map( genre => <Text key={ genre.id } text={ genre.name } className='gray' /> ) }
                </div>
                { data.runtime && <Text text={ runTime(data.runtime) } className='gray' />}
                { data.release_date && <Subtitle text={ movieDate(data.release_date) } color='white' />}
            </section>    
        </div>
    </div>
  )
}

export default FilmDetails