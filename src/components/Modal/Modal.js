import React from 'react'
import Navbar from '../Navbar/Navbar'
import { HashLink } from 'react-router-hash-link'
import style from './Modal.module.scss'
// import {ReactComponent as Facebook} from '../../../public/images/icon-facebook.svg';
// import {ReactComponent as Twitter} from '../../../public/images/icon-twitter.svg';


const Modal = (props) => {
  return (
    <div className={props.isModal ? `${style.modal} ${style.fadeOut}` : `${style.modal} ${style.fadeIn}`}>
      <div className={style.wrapper}>
        <p className={style.linkItem} onClick={props.closeModal}><HashLink smooth to='#features'>{props.liText1}</HashLink></p>
        <p className={style.linkItem} onClick={props.closeModal}><HashLink smooth to='#extension'>{props.liText2}</HashLink></p>
        <p className={style.linkItem} onClick={props.closeModal}><HashLink smooth to='#contact'>{props.liText3}</HashLink></p>
        <button className={style.modalButton} onClick={props.closeModal}>Login</button>
      </div>
      <div className={style.socialMedia}>
        <img src='/images/icon-facebook.svg' alt='facebook' onClick={props.closeModal}/>
        <img src='/images/icon-twitter.svg' alt='twitter' onClick={props.closeModal}/>
      </div>
    </div>
  )
}

export default Modal