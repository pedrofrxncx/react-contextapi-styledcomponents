import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../contexts/ThemeContext'

export default function Footer() {
  const { onToggleTheme, theme} = useContext(ThemeContext)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        onClick={onToggleTheme} 
        type="button"
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}