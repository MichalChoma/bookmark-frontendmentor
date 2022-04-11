import React, { useState, useEffect } from 'react';
import Modal from './components/Modal/Modal';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { navContent, heroComponent, featuresContent, extensions, faqCard, contactCard } from './content/content'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Extension from './components/Extension/Extension';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [modal, setModal] = useState(false);

  const modalHandle = () => {
    setModal(!modal);
  }

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal]);



  
  return (
        <div className="App">
          <Navbar {...navContent} hamburgerFn={modalHandle} isModal={modal}/>
          <Modal isModal={modal} {...navContent} closeModal={modalHandle}/>
          <Hero {...heroComponent}/>
          <Features {...featuresContent} />
          <Extension {...extensions} />
          <Faq {...faqCard} />
          <Contact {...contactCard} />
          <Footer {...navContent} />
        </div>
  );
}

export default App;
