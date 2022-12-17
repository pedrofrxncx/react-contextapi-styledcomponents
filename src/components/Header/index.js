import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'

import { Container } from './styles';

import { ThemeContext } from '../../contexts/ThemeContext'

export default function Header() {
  const { onToggleTheme, theme } = useContext(ThemeContext)
  const history = useHistory()

  function handleNavigate() {
    history.push('/')
  }

  return (
    <Container>
      <h1>MyBlog</h1>
      <button 
        onClick={onToggleTheme} 
        type="button"
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button onClick={handleNavigate}>Voltar para a home</button>
    </Container>
  );
}