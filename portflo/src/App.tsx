import React, { useReducer } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Context, reducer, initialState } from './context';
import usePersistedState from './utils/usePersistedState';
import Router from './Router';
import defaultTheme from './styles/themes/default';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Context.Provider value={{ state, dispatch }}>
        <Router>
          <Loader />
          <Header />
          {/* <Main /> */}
        </Router>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;