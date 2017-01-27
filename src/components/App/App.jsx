import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Root from './Root';
import configureStore from '../../redux/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store} key="provider">
      <div className="App">
        <Root />
      </div>
    </Provider>
  );
}
