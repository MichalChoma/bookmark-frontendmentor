import React from 'react'
import Button from '../Button/Button'
import style from './Hero.module.scss'
import ContentCard from '../ContentCard/ContentCard'
// import {ReactComponent as Image} from '../../../public/images/illustration-hero.svg';



const Hero = (props) => {
  return (
    <div className={style.wrapper}>
        <ContentCard headLine desc={props.desc} illustration={props.illustration} topLine={props.topLine} btn1={props.btn1} btn2={props.btn2}/>
        
    </div>
  )
}

export default Hero