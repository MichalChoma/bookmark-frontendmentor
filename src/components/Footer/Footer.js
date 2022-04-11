import React from 'react'
import style from './Footer.module.scss'
import { HashLink } from 'react-router-hash-link';


const Footer = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.links}>
            <HashLink smooth to='#nav'>
            <img src='/images/logo-bookmark3.svg' alt="logo-bookmark" className={style.logo}/>
            </HashLink>

            <HashLink smooth to="#features">
              <p className={style.linkItem}>{props.liText1}</p>
            </HashLink>

            <HashLink smooth to="#extension">
              <p className={style.linkItem}>{props.liText2}</p>
            </HashLink>

            <HashLink smooth to="#contact">
              <p className={style.linkItem}>{props.liText3}</p>
            </HashLink>
        </div>
        <div className={style.socialMedia}>
            <img src='/images/icon-facebook.svg' alt='facebook' />
            <img src='/images/icon-twitter.svg' alt='twitter' />
        </div>
        
      </div>
    </div>
  )
}

export default Footer