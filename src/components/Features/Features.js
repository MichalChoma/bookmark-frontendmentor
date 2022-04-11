import React, { useState } from 'react'
import style from './Features.module.scss'
import OptionItem from './optionItem/OptionItem'
import ContentCard from '../ContentCard/ContentCard'
import { featuresCard1, featuresCard2, featuresCard3 } from '../../content/content'




const Features = (props) => {

  const [isActive, setActive] = useState([true,false,false]);

  const activeHandle = (e) => {
    const idx = e.target.closest('li').id;
    const newState = [...isActive]
    
    newState[0] = false;
    newState[1] = false;
    newState[2] = false;
    newState[idx]=true;
    setActive([...newState])
    // newState[idx]=true;
    // setActive([...newState]);
    // console.log(newState)
  };

    
  return (
    <div id={props.id} className={style.wrapper}>
        <div className={style.optionMenu}>
            <h2 className={style.headLine}>{props.topLine}</h2>
            <p className={style.desc}>{props.desc}</p>
            <ul className={style.options} onClick={activeHandle}>
                <OptionItem id={0} itemState={isActive[0]}>{props.option1}</OptionItem>
                <OptionItem id={1} itemState={isActive[1]}>{props.option2}</OptionItem>
                <OptionItem id={2} itemState={isActive[2]}>{props.option3}</OptionItem>
            </ul>
        </div>
        <div className={style.cardWrapper}>
          {isActive[0] && <ContentCard {...featuresCard1} after1/>}
          {isActive[1] && <ContentCard {...featuresCard2} after2/>}
          {isActive[2] && <ContentCard {...featuresCard3} after3/>}
        </div>

    </div>
  )
}

export default Features