import React from 'react'
import styles from './WatchList.module.scss'

import Header from 'src/components/Header/Header'
import Title from 'src/components/Title/Title'
import Text from 'src/components/Text/Text'
import Card from 'src/components/Card/Card'

import { useAuthContext } from 'src/hooks/useAuthContext'
import { useAccountContext } from 'src/hooks/useAccountContext'
import { movieDate } from 'src/helper/modifyDatas'
import { useNavigate } from 'react-router-dom'

const WatchList = () => {

    const { authUser } = useAuthContext()
    const { accounts } = useAccountContext()

    const userLogged = accounts.find( account => account.id === authUser.id )

    const navigate = useNavigate()

    const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
    const getMovieId = (id, type) => {
        if( type === 'movie' ) {
            navigate(`/filmes/${id}`)
            window.scrollTo(0,0)
        } else { 
            navigate(`/series/${id}`)
            window.scrollTo(0,0)    
        }
    }

    return (
    <div className={ styles.watchList }>
        <Header username={ authUser.username } mobile='visible' />
        <main className={ styles.watchList__main }>
            <div className={ styles.watchList__container }>
                <Title text='Minha lista' /> 
                { userLogged.watchList.length === 0 && <Text text= 'Você não tem filmes/séries favoritos' className='white' /> }
                <div className={ styles.watchList__cards }>
                    <ul className={ styles.watchList__list }>
                    { userLogged.watchList.length > 0 &&  
                        userLogged.watchList.map( film => 
                            <li key={ film.id } className={ styles.watchList__card }>
                                <Card 
                                    id={ film.id }
                                    type='movie'
                                    name={ film.name }
                                    src={`${posterBaseURL}${film.poster_path}`} 
                                    alt={`Poster do filme ${film.name}`} 
                                    onClick={ () => getMovieId(film.id, film.media_type) }
                                />
                                <div className={ styles.watchList__data}>
                                    <Text text={ film.name } className='white' />
                                    <Text text={movieDate(film.date)} className='gray' />
                                </div>
                            </li> 
                        )
                    }
                    </ul>
                </div>
            </div>
        </main>
    </div>
  )
}

export default WatchList