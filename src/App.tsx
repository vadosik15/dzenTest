import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './Store/store';
import './styles/App.scss'

export const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  )
};