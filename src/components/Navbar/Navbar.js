import React, { useState } from 'react'
import { redColor } from '../../content/content'
import { HashLink } from 'react-router-hash-link';
import Button from '../Button/Button'
import style from './Navbar.module.scss'

const Navbar = (props) => {
  return (
    <div id='nav' className={props.isModal ? style.navReversed : style.nav}>
        {props.isModal ? <img src="/images/logo-bookmark2.svg" alt='logo' className={style.logo} /> : <img src='/images/logo-bookmark.svg' alt='logo2' className={style.logo}/>}
        <div className={style.hamburger} onClick={props.hamburgerFn}>
        {props.isModal ? <img src='/images/icon-close.svg' onClick={props.hamburgerFn}/> : <img src='/images/icon-hamburger.svg' alt='hamburger' onClick={props.hamburgerFn}/>}
        </div>
        <div className={style.pcMenu}>
           <HashLink smooth to="#features">
              <p className={style.linkItem}>{props.liText1}</p>
            </HashLink>

            <HashLink smooth to="#extension">
              <p className={style.linkItem}>{props.liText2}</p>
            </HashLink>

            <HashLink smooth to="#contact">
              <p className={style.linkItem}>{props.liText3}</p>
            </HashLink>

            <Button bgc={redColor}>LOGIN</Button>
        </div>
    </div>
  )
}

export default Navbar