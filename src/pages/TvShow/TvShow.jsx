import React, { useState } from 'react'
import styles from './TvShow.module.scss'

import Header from 'src/components/Header/Header'
import Title from 'src/components/Title/Title'
import Text from 'src/components/Text/Text';
import Card from 'src/components/Card/Card';
import SelectForm from 'src/components/SelectForm/SelectForm';

import { useAuthContext } from 'src/hooks/useAuthContext';
import { movieDate } from 'src/helper/modifyDatas';
import { getAPIData } from 'src/helper/getAPIData';
import { useNavigate } from 'react-router-dom';

const TvShow = ({  }) => {

    const [ idGenre, setIdGenre ] = useState('')
    const { authUser } = useAuthContext()
    const navigate = useNavigate()

    const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
    const genres = getAPIData('/genre/tv/list').genres
    const filterByGenre = getAPIData(`/discover/tv?page=1&sort_by=popularity.desc&with_genres=${idGenre}`).results
    
    const getIdGenre = e => {
        const id = e.target.value
        setIdGenre(id)
    }

    const getMovieId = id => {
        navigate(`/series/${id}`)
        window.scrollTo(0,0)
    }

    return (
    <div className={ styles.movies }>
        <Header content='visible' username={ authUser.username } />
        <main className={ styles.movies__main }>
            <div className={ styles.movies__container }>
                <section className={ styles.movies__search }>
                    <Title text='Séries' /> 
                    <SelectForm 
                        name='genres'
                        label='Selecione um gênero:' 
                        onChange={ getIdGenre }
                        firstOpt={ 
                            <option 
                                key='Todos' 
                                value=''
                            > 
                               Todos
                            </option>  }
                        options={ genres?.map( genre => 
                            <option 
                                key={ genre.name } 
                                value={ genre.id } 
                            >
                                { genre.name }
                            </option> 
                        )}
                    />    
                </section>
                <section className={ styles.movies__cardsContainer }>
                    <div className={ styles.movies__cards }>
                        <ul className={ styles.movies__ul }>
                            { filterByGenre?.map( tv => 
                                <li key={tv.id} className={ styles.movies__li} >
                                    <Card 
                                        src={`${posterBaseURL}${tv.poster_path}`} 
                                        alt={`Poster da série ${tv.name}`} 
                                        onClick={ () => getMovieId(tv.id) }
                                    />
                                    <div className={ styles.movies__data}>
                                        <Text text={tv.name} className='white' />
                                        <Text text={movieDate(tv.first_air_date)} className='gray' />
                                    </div>
                                </li> 
                            ) }
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    </div>
    
  )
}

export default TvShow