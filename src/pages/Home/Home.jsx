import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from 'src/components/Header/Header'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'
import Card from 'src/components/Card/Card'
import Subtitle from 'src/components/Subtitle/Subtitle'
import tmdb from 'src/api/tmdbApi';
import Slider from 'react-slick'
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Home = () => {

  const sliderConfig = {
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5.07,
    slidesToScroll: 1
  }
  
  useEffect(() => {
    tmdb
      .get('/tv/popular') // Filmes pulares: /trending/movie/week - Séries populares: /trending/tv/week - Populares semanais: /trending/all/week
      .then((res) => {
        console.log(res.data)
      })
  })



  return (
    <div className={ styles.home }>
      <Header content='visible' />
      <section className={ styles.home__sectionData }>
        <div className={ styles.home__filmData }>
          <img src="" alt="Logo do filme" />
          <Text className='white' text='Miles Morales retorna para o próximo capítulo da saga do Aranhaverso, uma aventura épica que transportará o Homem-Aranha em tempo integral e amigável do bairro do Brooklyn através do Multiverso para unir forças com Gwen Stacy.' />
          <div className={ styles.home__buttons }>
              <Button btnClassName={ styles.home__btnPlay } txtClassName='white' title='Reproduzir' type='button' icon={<IoPlayCircleOutline className={ styles.home__iconPlay } />} />
              <Button btnClassName={ styles.home__btnKnowMore } txtClassName='black' title='Saiba mais' type='button' icon={<IoMdInformationCircleOutline className={ styles.home__iconKnowMore } />} />
          </div>   
        </div>
      </section>
      <main className={ styles.home__main }>
        <section className={ styles.home__sectionPopulars }>
          <Subtitle color='white' text='Populares' />
            <Slider { ...sliderConfig }>
              <Card align='horizontal' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='horizontal' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='horizontal' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='horizontal' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='horizontal' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='horizontal' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
            </Slider>
        </section>
        <section className={ styles.home__sectionPopulars }>
          <Subtitle color='white' text='Populares' />
            <Slider { ...sliderConfig }>
              <Card align='vertical' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='vertical' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='vertical' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='vertical' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='vertical' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <Card align='vertical' src='https://s3-alpha-sig.figma.com/img/f77b/6e96/f57342d3de13bdc327c37e23a10f00e6?Expires=1701043200&Signature=pj31zn8UufM~wxoCHl3gs1MjYPekut2v6P-7ZLNpcPnyolYC862y8EQ8SRiZcu610Mmkr9Lawf73Yp2jlE-ce4BZfxwmIjZfJFUlGzGzI1IQL9H5rvkSBpiicubxCtEx0BrIcllM09xgHsfxHUFezhdAL5TPlxP5L9XYleyIyL1eUlWYot324rTd6rNbdSDkuWuv9bk3h7r3KSrfl9nsDJOCzUWnRs-X4dIeCP7HsxD6uEecnhNRW1qHtOmnyp5IcPe~eCJueM6DfVCHnxzZ~x3ePimiECAtM7ns0ITedjEQpPEtXzatahZEDBYIOO~9Unv0~7R0B5xVuX9P~jPTng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
            </Slider>
        </section>
      </main>
    </div>
  )
}

export default Home