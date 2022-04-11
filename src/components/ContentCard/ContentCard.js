import React from 'react'
import Button from '../Button/Button';
import { blueColor, greyColor } from '../../content/content';
import style from './ContentCard.module.scss'

const ContentCard = (props) => {
  let classNameAfter;
  const whichClassName = () => {
    if(props.after1){
      classNameAfter = style.imgWrapper2
    } else if(props.after2){
      classNameAfter = style.imgWrapper3
    } else if(props.after3){
      classNameAfter = style.imgWrapper4
    } else {
      classNameAfter = style.imgWrapper
    }
  }
  whichClassName()
  return (
    <div className={style.wrapper}>
        <div className={classNameAfter}><img src={props.illustration} alt='heroJpg' className={style.svg}/></div>
        <div className={props.headLine ? style.contentLeft : style.contentRight}>
                {props.headLine ? (
                    <h1 className={style.topLine}>{props.topLine}</h1>
                    ) : (
                    <h2 className={style.topLine}>{props.topLine}</h2>
                    )
                }
                <p className={style.desc}>{props.desc}</p>
                <div className={style.btns}>
                    {props.btn1 && <Button bgc={blueColor}>{props.btn1}</Button>}
                    {props.btn2 && <Button bgc={greyColor}>{props.btn2}</Button>}
                </div>
        </div>
    </div>
  )
}

export default ContentCard