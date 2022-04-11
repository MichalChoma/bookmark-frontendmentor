import React, { useState } from 'react'
import style from './FaqItem.module.scss'
import { arrowDown, redColorHex } from '../../../content/content'
const FaqItem = (props) => {
    
    const [active, setActive] = useState(false)

    const activeHandle = () => {
        setActive(!active)
    }

  return (
    <div className={style.wrapper} onClick={activeHandle}>
        <div className={style.top}>
            <p className={style.question}>{props.question}</p>
            {active ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className={style.arrowActive}><path fill="none" stroke={redColorHex} strokeWidth="3" d="M1 1l8 8 8-8"/></svg> : <img src={arrowDown} alt="arrowDown" />}
        </div>

        <p className={style.answer}>{active && props.answer}</p>
    </div>
  )
}

export default FaqItem