import React, { useState, createContext, useMemo, useEffect } from 'react'
import themes from '../styles/themes'

export const ThemeContext = createContext()

export function ThemeProvider(props) {
  const storagedTheme = localStorage.getItem('theme')

  const [theme, setTheme] = useState(storagedTheme  || 'dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme, currentTheme])

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider 
      value={{
        theme: theme,
        selectedTheme: currentTheme,
        onToggleTheme: handleToggleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}