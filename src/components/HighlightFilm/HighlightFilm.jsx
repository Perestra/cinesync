import React from 'react'
import styles from './HighlightFilm.module.scss'

import Title from 'src/components/Title/Title'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'
import getTrailer from 'src/helper/trailerURL'
import imdb from 'src/assets/images/imdb.png'

import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { movieDate, tvDate, runTime, rating } from 'src/helper/modifyDatas';

const HighlightFilm = ({ data, filmData }) => {
    return (
    <section className={ styles.HighlightFilm }>
        <div className={ styles.HighlightFilm__dataContainer }>
            <div className={ styles.HighlightFilm__data }>
                <div className={ styles.HighlightFilm__date }>
                    <Text className='white' text={ data.release_date? movieDate(data.release_date): tvDate(data.first_air_date, data.last_air_date) } />
                    <Text className='white' text={ runTime(data.runtime) } />
                </div>
                <Title 
                    key={data.title? data.title: data.name}
                    animation='tilt-in-left-1'
                    text={data.title? data.title: data.name} 
                />
                <div className={ styles.HighlightFilm__genres }>
                    { data.genres?.map( genre => <Text key={ genre.name } className='white' text={ genre.name } /> ) }
                </div>
                <div className={ styles.HighlightFilm__rating }>
                    <img src={imdb} alt="Logo do IMDB" />
                    <Text className='white' text={rating(data.vote_average)} />
                </div>
            </div>
            <div className={ styles.HighlightFilm__buttons }>
               <Button 
                    btnClassName={ styles.HighlightFilm__btnPlay }
                    txtClassName='white' 
                    title='Assistir ao trailer' 
                    type='button' 
                    href={getTrailer(filmData.media, filmData.id)}
                    target='_blank'
                    icon={<IoPlayCircleOutline className={ styles.HighlightFilm__iconPlay } />} 
                />
                <Button 
                    btnClassName={ styles.HighlightFilm__btnKnowMore } 
                    txtClassName='black' 
                    title='Saiba mais' 
                    type='button' 
                    icon={<IoMdInformationCircleOutline className={ styles.HighlightFilm__iconKnowMore } />} 
                />
            </div> 
        </div>    
    </section>
  )
}

export default HighlightFilm