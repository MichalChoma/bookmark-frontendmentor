import React from 'react'
import FaqItem from './FaqItem/FaqItem'
import style from './Faq.module.scss'
import { faqItems, blueColor } from '../../content/content'
import Button from '../Button/Button'

const Faq = (props) => {
  return (
    <div className={style.wrapper}>
        <h2 className={style.topLine}>{props.topLine}</h2>
        <p className={style.desc}>{props.desc}</p>

        <div className={style.itemsWrapper}>
            {faqItems.map((el,idx) => (
                <FaqItem key={idx} {...el}/>
            ))}
        </div>

        <Button bgc={blueColor} width="40%">{props.btn1}</Button>
    </div>
  )
}

export default Faq