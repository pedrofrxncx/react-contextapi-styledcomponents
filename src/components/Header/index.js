import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../contexts/ThemeContext'

export default function Header() {
  const { onToggleTheme, theme } = useContext(ThemeContext)

  return (
    <Container>
      <h1>MyBlog</h1>
      <button 
        onClick={onToggleTheme} 
        type="button"
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}