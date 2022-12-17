import React, { useContext, useEffect } from 'react';

import { ThemeContext } from './contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

function App() {
  const {selectedTheme} = useContext(ThemeContext)

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
