import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import './index.css';
import todoApp from './redux/todo';


const store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//eslint-disable-line

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')  // eslint-disable-line
);
