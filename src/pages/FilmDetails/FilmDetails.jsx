import React from 'react'
import styles from './FilmDetails.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import Title from 'src/components/Title/Title'
import Subtitle from 'src/components/Subtitle/Subtitle'
import Text from 'src/components/Text/Text'
import ProfileCard from 'src/components/ProfileCard/ProfileCard'
import Button from 'src/components/Button/Button'
import imdb from 'src/assets/images/imdb.png'
import notFoundCast from 'src/assets/svg/notFound_person.svg'
import Slider from 'react-slick'

import { useAuthContext } from 'src/hooks/useAuthContext'
import { movieDate, runTime } from 'src/helper/modifyDatas'
import { getAPIData } from 'src/helper/getAPIData'
import { rating } from 'src/helper/modifyDatas'
import { useParams } from 'react-router-dom'
import { IoPlayCircleOutline } from 'react-icons/io5'

const FilmDetails = () => {

    const slideConfig = {
        infinite: false,
        arrows: true,
        swipeToSlide: true,
        lazyLoad: true,
        speed: 750,
        slidesToShow: 1.7,
        slidesToScroll: 1
    }

    const { authUser } = useAuthContext()
    const params = useParams() 
    const filmId = params.id

    const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
    const backDropBaseURL = 'https://image.tmdb.org/t/p/original'
    const trailerBaseURL = 'http://www.youtube.com/embed/'
    const thumbNailURL = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

    const movie = getAPIData(`/movie/${filmId}`)
    const credits = getAPIData(`/movie/${filmId}/credits`)
    const videos = getAPIData(`/movie/${filmId}/videos`)
    const images = getAPIData(`/movie/${filmId}/images`)
    
    const cast = credits.cast
    const crew = credits.crew
    const trailers = videos.results
    const backdrops = images.backdrops

    const director = crew?.filter( person => person.job === 'Director')

  return (
    <div className={ styles.filmDetails }>
        <div className={ styles.filmDetails__data }>
            <div className={ styles.filmDetails__backdrop } style={{ backgroundImage:`linear-gradient(0deg, rgba(12, 12, 12, 0.8) 0%, rgba(12, 12, 12, 0.8) 100%), url(${backDropBaseURL}${movie.backdrop_path})` }}>
                <Header content='visible' username={ authUser.username } />
                <section className={ styles.filmDetails__highlight }>
                    <div className={ styles.filmDetails__poster }>
                        { movie.poster_path && <img src={ `${posterBaseURL}${movie.poster_path}` } alt={`Plano de fundo de ${movie.title}`} /> }
                        <div className={ styles.filmDetails__production }>
                            {director?.length > 0 && 
                            <div className={ styles.filmDetails__cast }>
                                <Text text='Diretor' className='white' />
                                <Text text={ `${director[0]?.name}` } className='gray' /> 
                            </div> }
                        </div>
                    </div> 
                    <div className={ styles.filmDetails__filmDetails }>
                        <div className={ styles.filmDetails__title }>
                            <Title text={ movie.title } animation='tilt-in-left-1' />
                            <div className={ styles.filmDetails__filmData }>
                                { movie.runtime && <Text text={ runTime(movie.runtime) } className='gray' />}
                                <div className={ styles.filmDetails__genres}>
                                    { movie?.genres?.map( genre => <Text key={ genre.id } text={ genre.name } className='gray' /> ) }
                                </div>
                                { movie.release_date && <Text text={ movieDate(movie.release_date) } className='gray' />}
                            </div>     
                        </div>
                        { movie.vote_average && <div className={ styles.filmDetails__rating }>
                            <img src={imdb} alt="Logo do IMDB" />
                            <Text className='white' text={rating(movie.vote_average)} />
                        </div> }
                        { cast && <div className={ styles.filmDetails__cast }>
                            <Text text='Atores' className='white' />
                            <Text text={ `${cast[0]?.name}, ${cast[1]?.name}, ${cast[2]?.name}` } className='gray' />
                        </div> }
                        { trailers?.length > 0 && <Button 
                            btnClassName={ styles.filmDetails__btnPlay }
                            txtClassName='white' 
                            title='Assistir ao trailer' 
                            type='button' 
                            href={ `${trailerBaseURL}${trailers[0]?.key}?autoplay=1` }
                            target='_blank'
                            icon={<IoPlayCircleOutline className={ styles.filmDetails__iconPlay } />} 
                        /> }
                    </div>
                </section>     
            </div>    
            <main className={ styles.filmDetails__main }>
                <section className={ styles.filmDetails__filmInfos }>
                    <div className={ styles.filmDetails__filmCast }>
                        { movie.overview && <div className={ styles.filmDetails__overview }>
                            <Subtitle text='Sinopse' color='white'  />
                            { movie.overview != ""? <Text text={ movie.overview } className='gray' />: <Text text='Sinopse indisponível no momento.' className='gray' /> }
                        </div> }
                        { cast && <div className={ styles.filmDetails__casters }>
                            <Subtitle text='Elenco' color='white'  />
                            <div className={ styles.filmDetails__caster }>
                                { cast[0] && 
                                <ProfileCard 
                                    key={cast[0].credit_id} 
                                    src={cast[0].profile_path? `${posterBaseURL}${cast[0].profile_path}`: notFoundCast} 
                                    alt={cast[0].name} 
                                    text={cast[0].name} 
                                /> }
                                { cast[1] && 
                                <ProfileCard 
                                    key={cast[1].credit_id} 
                                    src={cast[1].profile_path? `${posterBaseURL}${cast[1].profile_path}`: notFoundCast} 
                                    alt={cast[1].name} 
                                    text={cast[1].name} 
                                /> }
                                { cast[2] && 
                                <ProfileCard 
                                    key={cast[2].credit_id} 
                                    src={cast[2].profile_path? `${posterBaseURL}${cast[2].profile_path}`: notFoundCast} 
                                    alt={cast[2].name} 
                                    text={cast[2].name} 
                                /> }
                                { cast[3] && 
                                <ProfileCard 
                                    key={cast[3].credit_id} 
                                    src={cast[3].profile_path? `${posterBaseURL}${cast[3].profile_path}`: notFoundCast} 
                                    alt={cast[3].name} 
                                    text={cast[3].name} 
                                /> }
                                { cast[4] && 
                                <ProfileCard 
                                    key={cast[4].credit_id} 
                                    src={cast[4].profile_path? `${posterBaseURL}${cast[4].profile_path}`: notFoundCast} 
                                    alt={cast[4].name} 
                                    text={cast[4].name} 
                                /> }    
                            </div>
                        </div> }
                    </div>
                    <aside className={ styles.filmDetails__aside }>
                        { trailers && 
                        <div className={ styles.filmDetails__videos }>
                            <Subtitle text='Videos' color='white'  />
                            { trailers?.length > 0? <Slider { ...slideConfig }>
                                { trailers?.map( video => 
                                    <div className={ styles.filmDetails__video } key={video?.id} >
                                        <a 
                                            className={ styles.filmDetails__btnTrailer } 
                                            href={ `${trailerBaseURL}${video?.key}?autoplay=1` } 
                                            target='_blank'
                                        >
                                            {<IoPlayCircleOutline className={ styles.filmDetails__iconTrailer } />}
                                        </a>
                                        <video 
                                            src={ `${trailerBaseURL}${video?.key}` } 
                                            poster={ `${thumbNailURL(video?.key)}` }
                                        >
                                        </video>
                                    </div>
                                )}
                            </Slider>: <Text text='Não existem vídeos para este filme.' className='gray' /> }
                        </div> }
                        { backdrops && 
                        <div className={ styles.filmDetails__images }>
                            <Subtitle text='Imagens' color='white'  />
                            { backdrops?.length > 0? <Slider { ...slideConfig }>
                                { backdrops[0]?.file_path && <div className={ styles.filmDetails__image }>
                                    <img src={ `${posterBaseURL}${backdrops[0]?.file_path}` } alt={ `Foto do filme ${movie?.title}` } />
                                </div> }
                                { backdrops[1]?.file_path && <div className={ styles.filmDetails__image }>
                                    <img src={ `${posterBaseURL}${backdrops[1]?.file_path}` } alt={ `Foto do filme ${movie?.title}` } />
                                </div> } 
                                { backdrops[2]?.file_path && <div className={ styles.filmDetails__image }>
                                    <img src={ `${posterBaseURL}${backdrops[2]?.file_path}` } alt={ `Foto do filme ${movie?.title}` } />
                                </div> } 
                                { backdrops[3]?.file_path && <div className={ styles.filmDetails__image }>
                                    <img src={ `${posterBaseURL}${backdrops[3]?.file_path}` } alt={ `Foto do filme ${movie?.title}` } />
                                </div> } 
                                { backdrops[4]?.file_path && <div className={ styles.filmDetails__image }>
                                    <img src={ `${posterBaseURL}${backdrops[4]?.file_path}` } alt={ `Foto do filme ${movie?.title}` } />
                                </div> } 
                            </Slider>: <Text text='Não existem imagens para este filme.' className='gray' /> }
                        </div> }
                    </aside>
                </section>
            </main>
        </div>
    </div>
  )
}

export default FilmDetails