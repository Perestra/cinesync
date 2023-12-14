import React from 'react'
import styles from './HighlightFilm.module.scss'

import Title from 'src/components/Title/Title'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'
import imdb from 'src/assets/images/imdb.png'
import tmdb from 'src/api/tmdbApi'

import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { movieDate, tvDate, runTime, rating } from 'src/helper/modifyDatas';
import { useAxios } from 'src/hooks/useAxios'

const HighlightFilm = ({ filmData }) => {

    const { data, isLoading, error } = useAxios(tmdb, 'get', `/${filmData.media}/${filmData.id}`)

    const { results } = useAxios( tmdb, 'get', `/${filmData.media}/${filmData.id}/videos`)
    const trailer = results.filter( video => video.type.toLowerCase() === 'trailer')

    const translateMedia = media => {
        if(media === 'movie') {
            return 'filmes'
        } 
        return 'series'
    }

    const trailerBaseURL = 'http://www.youtube.com/embed/'

    return (
    <section className={ styles.HighlightFilm }>
        <div className={ styles.HighlightFilm__dataContainer }>
            { data && <div className={ styles.HighlightFilm__data }>
                <div className={ styles.HighlightFilm__dataFilm }>
                    <div className={ styles.HighlightFilm__date }>
                        { (data.release_date || data.first_air_date) && <Text className='white' text={ data.release_date? movieDate(data.release_date): tvDate(data.first_air_date, data.last_air_date) } />}
                        { data.runtime && <Text className='white' text={ runTime(data.runtime) } /> }
                    </div>    
                    <Title 
                        key={data.title? data.title: data.name}
                        animation='tilt-in-left-1'
                        text={data.title? data.title: data.name} 
                    />
                    <div className={ styles.HighlightFilm__genres }>
                        { data.genres?.map( genre => <Text key={ genre.name } className='white' text={ genre.name } /> ) }
                    </div>     
                </div>
                <Text text={ data?.overview } className='gray' />
                { data.vote_average && 
                    <div className={ styles.HighlightFilm__rating }>
                        <img src={imdb} alt="Logo do IMDB" />
                        <Text className='white' text={rating(data.vote_average)} />
                    </div> }
            </div> }
            <div className={ styles.HighlightFilm__buttons }>
                { data?.id && <Button 
                    btnClassName={ styles.HighlightFilm__btnKnowMore } 
                    txtClassName='black' 
                    title='Saiba mais' 
                    type='button' 
                    href={ `/${translateMedia(filmData.media)}/${filmData.id}` }
                    icon={<IoMdInformationCircleOutline className={ styles.HighlightFilm__iconKnowMore } />} 
                /> }
                { trailer[0]?.key && <Button 
                    btnClassName={ styles.HighlightFilm__btnPlay }
                    txtClassName='white' 
                    title='Assistir ao trailer' 
                    type='button' 
                    href={ `${trailerBaseURL}${trailer[0].key}?autoplay=1` }
                    target='_blank'
                    icon={<IoPlayCircleOutline className={ styles.HighlightFilm__iconPlay } />} 
                /> }
            </div> 
        </div>    
    </section>
  )
}

export default HighlightFilm