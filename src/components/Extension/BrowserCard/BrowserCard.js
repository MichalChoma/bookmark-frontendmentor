import React from 'react'
import Button from '../../Button/Button'
import style from './BrowserCard.module.scss'
import { blueColor } from '../../../content/content'

const BrowserCard = (props) => {
  return (
    <div className={style.wrapper} id={props.id}>
        <div className={style.imageWrapper}><img src={props.image} alt="browserLogo" /></div>
        <h3 className={style.topLine}>{props.topLine}</h3>
        <p className={style.desc}>{props.desc}</p>
        <img className={style.dottedLine} src={props.dottedLine} alt="dottedLine" />
        <Button bgc={blueColor} width="100%">{props.btn1}</Button>
    </div>
  )
}

export default BrowserCard