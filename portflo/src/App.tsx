import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { Context, reducer, initialState } from './context';
import Routes from './Routes';
import defaultTheme from './styles/themes/default';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Loader from './components/Loader';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Main from './components/Main';


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Loader />
          <Header />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;