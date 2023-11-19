import React from 'react'
import styles from './HighlightFilm.module.scss'

import Title from 'src/components/Title/Title';
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'

import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const HighlightFilm = ({ mainBlockBuster }) => {

    console.log(mainBlockBuster)

  return (
    <section className={ styles.HighlightFilm }>
        {mainBlockBuster.map(film => 
            <div key={film.id} className={ styles.HighlightFilm__data }>
                <Title text={film.title} />
                <Text 
                    className='white' 
                    text={ film.overview }
                />
                <div className={ styles.HighlightFilm__buttons }>
                    <Button 
                        btnClassName={ styles.HighlightFilm__btnPlay } 
                        txtClassName='white' 
                        title='Reproduzir' 
                        type='button' 
                        icon={<IoPlayCircleOutline 
                        className={ styles.HighlightFilm__iconPlay } />} 
                    />
                    <Button 
                        btnClassName={ styles.HighlightFilm__btnKnowMore } 
                        txtClassName='black' 
                        title='Saiba mais' 
                        type='button' 
                        icon={<IoMdInformationCircleOutline 
                        className={ styles.HighlightFilm__iconKnowMore } />} 
                    />
                </div> 
            </div>    
        )}
      </section>
  )
}

export default HighlightFilm