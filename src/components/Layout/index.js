import React, { useEffect } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes'

import { Nav } from './styles'

export default function Layout() {

  useEffect(() => {
    document.addEventListener('scroll', () => {
      console.debug('scrollou')
    })
  }, [])
  return (
    <BrowserRouter>
      <Header/>
      <Nav>
        <Link to="/posts">Posts</Link>
        <Link to="/">Home</Link>
      </Nav>
      <Routes />
      <Footer/>
    </BrowserRouter>
  );
}
