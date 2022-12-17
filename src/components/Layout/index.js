import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {

  useEffect(() => {
    document.addEventListener('scroll', () => {
      console.debug('scrollou')
    })
  }, [])
  return (
    <>
      <Header/>
      <PostsList />
      <Footer/>
    </>
  );
}
