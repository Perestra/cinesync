import React from 'react'
import styles from './Card.module.scss'

import { IoStar, IoStarOutline } from 'react-icons/io5'
import { useAccountContext } from 'src/hooks/useAccountContext'
import { useAuthContext } from 'src/hooks/useAuthContext'

const Card = ({ id, type, name, date, src, alt, onClick }) => {

  const { accounts, setAccounts } = useAccountContext()
  const { authUser } = useAuthContext()

  const userLogged = accounts.find( account => account.id === authUser.id )
  const isInAccountWatchList = id => userLogged.watchList.find( movieId => movieId.id === id )

  const addInWatchList = (id, name, type, date, src) => {
    const movieData = {
      id: id,
      name: name,
      media_type: type,
      date: date,
      poster_path: src
    }
    userLogged.watchList = [...userLogged.watchList, movieData]
    setAccounts([...accounts])
  }

  const remFromWatchList = id => {
    const remId = userLogged.watchList.filter( movieId => movieId.id !== id )
    userLogged.watchList = [...remId]
    setAccounts([...accounts])
  }
  
  return (
    <div className={ styles.card }>
      { !isInAccountWatchList(id)?
        <IoStarOutline className={ styles.card__icon } onClick={ () => addInWatchList(id, name, type, date, src) } />: 
        <IoStar className={ styles.card__icon} onClick={ () => remFromWatchList(id) } />
      }
      <img className={ styles.card__image } src={ src } alt={ alt } onClick={ onClick }  />
    </div>
  )
}

export default Card