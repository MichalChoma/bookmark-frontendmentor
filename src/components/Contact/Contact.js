import React, { useState } from 'react'
import Button from '../Button/Button'
import style from './Contact.module.scss'
import { redColor } from '../../content/content'

const Contact = (props) => {

    const [email,setEmail] = useState("");
    const [valid,setValid] = useState(true);

    const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setValid(true)
    } else {
      setValid(false)
    } 
  
    }

    const handleOnChange = e => setEmail(e.target.value)

    

  return (
    <div id={props.id} className={style.wrapper}>
      <div className={style.contentWrapper}>
        <p className={style.desc}>{props.desc}</p>
        <h2 className={style.topLine}>{props.topLine}</h2>

        <div className={style.emailWrapper}>
          <span className={valid ? style.valid : style.notValid }>
              <input type='email' id='email' placeholder='Enter your email address' value={email} onChange={handleOnChange}/>
          </span>
          <Button bgc={redColor} onClick={emailValidation}>{props.btnText}</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact