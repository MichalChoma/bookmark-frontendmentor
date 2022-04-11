import React from 'react'
import style from './Extension.module.scss'
import { chromeCard, operaCard, firefoxCard } from '../../content/content'
import BrowserCard from './BrowserCard/BrowserCard'

const Extension = (props) => {
  return (
    <div id={props.id} className={style.wrapper}>
        <h2 className={style.topLine}>{props.topLine}</h2>
        <p className={style.desc}>{props.desc}</p>
        <div className={style.cardsWrapper}>
            <BrowserCard {...chromeCard} />
            <BrowserCard {...firefoxCard} />
            <BrowserCard {...operaCard} />
        </div>
    </div>
  )
}

export default Extension