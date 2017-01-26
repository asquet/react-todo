import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../../redux/store';

export default function ReduxApp() {
  const store = configureStore(window.__data);

  return <Provider store={store} key="provider"><App /></Provider>;
}
