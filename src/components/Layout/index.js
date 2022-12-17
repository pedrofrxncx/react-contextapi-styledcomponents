import React, { useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes'

export default function Layout() {

  useEffect(() => {
    document.addEventListener('scroll', () => {
      console.debug('scrollou')
    })
  }, [])
  return (
    <>
      <Header/>
        <Routes />
      <Footer/>
    </>
  );
}
