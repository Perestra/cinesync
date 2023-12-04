import React, { useState } from 'react'
import styles from './Movies.module.scss'

import Header from 'src/components/Header/Header'
import Title from 'src/components/Title/Title'
import Text from 'src/components/Text/Text';
import tmdb from 'src/api/tmdbApi'
import Card from 'src/components/Card/Card';
import SelectForm from 'src/components/SelectForm/SelectForm';

import { useAxios } from 'src/hooks/useAxios'
import { useAuthContext } from 'src/hooks/useAuthContext';
import { movieDate } from 'src/helper/modifyDatas';

const Movies = ({  }) => {

    const [ idGenre, setIdGenre ] = useState('')
    const { authUser } = useAuthContext()

    const getApiURL = url => {
        const { data, isLoading, error } = useAxios(tmdb, 'get', url)
        return data
    }

    const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
    const genres = getApiURL('/genre/movie/list').genres
    const filterByGenre = getApiURL(`/discover/movie?page=1&sort_by=popularity.desc&with_genres=${idGenre}`).results
    
    const getIdGenre = e => {
        const id = e.target.value
        setIdGenre(id)
    }

    return (
    <div className={ styles.movies }>
        <Header content='visible' username={ authUser.username } />
        <main className={ styles.movies__main }>
            <div className={ styles.movies__container }>
                <section className={ styles.movies__search }>
                    <Title text='Filmes' /> 
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
                            { filterByGenre?.map( film => 
                                <li key={film.id} className={ styles.movies__li} >
                                    <Card src={`${posterBaseURL}${film.poster_path}`} alt={`Poster do filme ${film.title}`} />
                                    <div className={ styles.movies__data}>
                                        <Text text={film.title} className='white' />
                                        <Text text={movieDate(film.release_date)} className='gray' />
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

export default Movies