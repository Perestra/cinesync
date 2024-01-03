import React from 'react'
import styles from './TvShowDetails.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import Title from 'src/components/Title/Title'
import Subtitle from 'src/components/Subtitle/Subtitle';
import Text from 'src/components/Text/Text'
import ProfileCard from 'src/components/ProfileCard/ProfileCard';
import imdb from 'src/assets/images/imdb.png'
import notFoundCast from 'src/assets/svg/notFound_person.svg'
import Card from 'src/components/Card/Card';
import Slider from 'react-slick'

import { useAuthContext } from 'src/hooks/useAuthContext'
import { getAPIData } from 'src/helper/getAPIData'
import { tvDate } from 'src/helper/modifyDatas'
import { rating } from 'src/helper/modifyDatas';
import { useParams } from 'react-router-dom'

const TvShowDetails = () => {

    const slideConfig = {
        infinite: false,
        arrows: true,
        swipeToSlide: true,
        lazyLoad: true,
        speed: 750,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                  slidesToShow: 1.3,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 830,
                settings: {
                  slidesToShow: 4.5,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 730,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 3.5,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 560,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 490,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 2.2,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 350,
                settings: {
                  slidesToShow: 1.8,
                  slidesToScroll: 1,
                }
            }
        ]
    }

    const { authUser } = useAuthContext()
    const params = useParams() 
    const tvId = params.id

    const posterBaseURL = 'https://image.tmdb.org/t/p/w500'
    const backDropBaseURL = 'https://image.tmdb.org/t/p/original'

    const tv = getAPIData(`/tv/${tvId}`)
    const credits = getAPIData(`/tv/${tvId}/credits`)
    const images = getAPIData(`/tv/${tvId}/images`)

    const cast = credits.cast
    const backdrops = images.backdrops

  return (
    <div className={ styles.tv }>
        <div className={ styles.tv__container }>
            <div className={ styles.tv__backdrop } style={{ backgroundImage:`linear-gradient(0deg, rgba(12, 12, 12, 0.8) 0%, rgba(12, 12, 12, 0.8) 100%), url(${backDropBaseURL}${tv.backdrop_path})` }} >
                <Header username={ authUser.username } mobile='visible' /> 
                <section className={ styles.tv__highlight }>
                    <div className={ styles.tv__poster }>
                        { tv.poster_path && 
                            <Card 
                                id={ tv.id }
                                name={ tv.name }
                                type='tv'
                                date={ tvDate(tv.first_air_date, tv.last_air_date) }
                                src={ `${posterBaseURL}${tv.poster_path}` } 
                                alt={`Poster da série ${tv.name}`}
                            /> 
                        }
                        {tv.created_by?.length > 0 && 
                        <div className={ styles.tv__createdBy }>
                            <Text text='Criação' className='white' />
                            <Text text={ `${tv.created_by[0].name}` } className='gray' /> 
                        </div> 
                        }
                    </div> 
                    <div className={ styles.tv__highlightContent }>
                        <div className={ styles.tv__title }>
                            { tv.first_air_date && <Text text={ tvDate(tv.first_air_date, tv.last_air_date) } className='gray' />}
                            <Title text={ tv.name } animation='tilt-in-left-1' />
                            { tv.genres && 
                            <div className={ styles.tv__genres}>
                                { tv.genres.map( genre => <Text key={ genre.id } text={ genre.name } className='gray' /> ) }
                            </div> }
                        </div>
                        { tv.vote_average != 0 && 
                        <div className={ styles.tv__rating }>
                            <img src={imdb} alt="Logo do IMDB" />
                            <Text className='white' text={rating(tv.vote_average)} />
                        </div> }
                        <div className={ styles.tv__statistics }>
                            { tv.number_of_seasons && 
                            <div className={ styles.tv__number }>
                                <Text text='Temporadas' className='white' />
                                <Text text={ tv.number_of_seasons } className='gray' />    
                            </div> }
                            { tv.number_of_episodes && 
                            <div className={ styles.tv__number }>
                                <Text text='Episódios' className='white' />
                                <Text text={ tv.number_of_episodes } className='gray' />    
                            </div> }
                        </div> 
                    </div>
                </section> 
            </div>
            <main className={ styles.tv__main }>
                <section className={ styles.tv__details }>
                    <div className={ styles.tv__specifications }>
                        <div className={ styles.tv__specContent }>
                            <div className={ styles.tv__overview }>
                                <Subtitle text='Sinopse' color='white'  />
                                { tv.overview != ""? <Text text={ tv.overview } className='gray' />: <Text text='Sinopse indisponível no momento.' className='gray' /> }
                            </div> 
                            <div className={ styles.tv__casters }>
                                <Subtitle text='Elenco' color='white'  />
                                { cast && cast?.length > 0? 
                                <div className={ styles.tv__caster }>
                                    { cast[0] && 
                                    <ProfileCard 
                                        key={cast[0].credit_id} 
                                        src={`${posterBaseURL}${cast[0].profile_path}`? `${posterBaseURL}${cast[0].profile_path}`: notFoundCast} 
                                        alt={ `Foto de perfil de ${cast[0].name}` } 
                                        text={cast[0].name} 
                                    /> }
                                    { cast[1] && 
                                    <ProfileCard 
                                        key={cast[1].credit_id} 
                                        src={`${posterBaseURL}${cast[1].profile_path}`? `${posterBaseURL}${cast[1].profile_path}`: notFoundCast} 
                                        alt={ `Foto de perfil de ${cast[1].name}` } 
                                        text={cast[1].name} 
                                    /> }
                                    { cast[2] && 
                                    <ProfileCard 
                                        key={cast[2].credit_id} 
                                        src={`${posterBaseURL}${cast[2].profile_path}`? `${posterBaseURL}${cast[2].profile_path}`: notFoundCast} 
                                        alt={ `Foto de perfil de ${cast[2].name}` } 
                                        text={cast[2].name} 
                                    /> }
                                    { cast[3] && 
                                    <ProfileCard 
                                        key={cast[3].credit_id} 
                                        src={`${posterBaseURL}${cast[3].profile_path}`? `${posterBaseURL}${cast[3].profile_path}`: notFoundCast} 
                                        alt={ `Foto de perfil de ${cast[3].name}` } 
                                        text={cast[3].name} 
                                    /> }
                                    { cast[4] && 
                                    <ProfileCard 
                                        key={cast[4].credit_id} 
                                        src={`${posterBaseURL}${cast[4].profile_path}`? `${posterBaseURL}${cast[4].profile_path}`: notFoundCast} 
                                        alt={ `Foto de perfil de ${cast[4].name}` } 
                                        text={cast[4].name} 
                                    /> } 
                                </div>: <Text text='Elenco indisponível no momento.' className='gray' /> }
                            </div> 
                        </div>
                        <aside className={ styles.tv__images }>
                            <Subtitle text='Imagens' color='white'  />
                            { backdrops? <Slider { ...slideConfig }>
                                { backdrops[0]?.file_path && 
                                <div className={ styles.tv__image }>
                                    <img src={ `${posterBaseURL}${backdrops[0].file_path}` } alt={ `Foto da série ${tv.name}` } />
                                </div> }
                                { backdrops[1]?.file_path && 
                                <div className={ styles.tv__image }>
                                    <img src={ `${posterBaseURL}${backdrops[1].file_path}` } alt={ `Foto da série ${tv.name}` } />
                                </div> } 
                                { backdrops[2]?.file_path && 
                                <div className={ styles.tv__image }>
                                    <img src={ `${posterBaseURL}${backdrops[2].file_path}` } alt={ `Foto da série ${tv.name}` } />
                                </div> } 
                                { backdrops[3]?.file_path && 
                                <div className={ styles.tv__image }>
                                    <img src={ `${posterBaseURL}${backdrops[3].file_path}` } alt={ `Foto da série ${tv.name}` } />
                                </div> } 
                                { backdrops[4]?.file_path && 
                                <div className={ styles.tv__image }>
                                    <img src={ `${posterBaseURL}${backdrops[4].file_path}` } alt={ `Foto da série ${tv.name}` } />
                                </div> } 
                            </Slider>: <Text text='Não existem imagens para esta série.' className='gray' /> }
                        </aside> 
                    </div>
                </section>
            </main>
        </div>
    </div>
  )
}

export default TvShowDetails