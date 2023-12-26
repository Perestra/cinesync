import React from 'react'
import styles from './HighlightFilm.module.scss'

import Title from 'src/components/Title/Title'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'
import imdb from 'src/assets/images/imdb.png'

import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { movieDate, tvDate, runTime, rating } from 'src/helper/modifyDatas';
import { getAPIData } from 'src/helper/getAPIData'

const HighlightFilm = ({ filmData }) => {

    const film = getAPIData(`/${filmData.media}/${filmData.id}`)
    const videos = getAPIData(`/${filmData.media}/${filmData.id}/videos`).results 
    const trailer = videos?.filter( video => video.type.toLowerCase() === 'trailer')

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
            { film && <div className={ styles.HighlightFilm__data }>
                <div className={ styles.HighlightFilm__dataFilm }>
                    <div className={ styles.HighlightFilm__date }>
                        { (film.release_date || film.first_air_date) && <Text className='white' text={ film.release_date? movieDate(film.release_date): tvDate(film.first_air_date, film.last_air_date) } />}
                        { film.runtime && <Text className='white' text={ runTime(film.runtime) } /> }
                    </div>    
                    <Title 
                        key={film.title? film.title: film.name}
                        animation='tilt-in-left-1'
                        text={film.title? film.title: film.name} 
                    />
                    <div className={ styles.HighlightFilm__genres }>
                        { film.genres?.map( genre => <Text key={ genre.name } className='white' text={ genre.name } /> ) }
                    </div>     
                </div>
                <Text text={ film?.overview } className='gray' />
                { film.vote_average && 
                    <div className={ styles.HighlightFilm__rating }>
                        <img src={imdb} alt="Logo do IMDB" />
                        <Text className='white' text={rating(film.vote_average)} />
                    </div> }
            </div> }
            <div className={ styles.HighlightFilm__buttons }>
                { film?.id && <Button 
                    btnClassName={ styles.HighlightFilm__btnKnowMore } 
                    txtClassName='black' 
                    title='Saiba mais' 
                    type='button' 
                    href={ `/${translateMedia(filmData.media)}/${filmData.id}` }
                    icon={<IoMdInformationCircleOutline className={ styles.HighlightFilm__iconKnowMore } />} 
                /> }
                { trailer?.length > 0 && <Button 
                    btnClassName={ styles.HighlightFilm__btnPlay }
                    txtClassName='white' 
                    title='Assistir ao trailer' 
                    type='button' 
                    href={ `${trailerBaseURL}${trailer[0]?.key}?autoplay=1` }
                    target='_blank'
                    icon={<IoPlayCircleOutline className={ styles.HighlightFilm__iconPlay } />} 
                /> }
            </div> 
        </div>    
    </section>
  )
}

export default HighlightFilm