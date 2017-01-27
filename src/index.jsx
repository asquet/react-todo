import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/App';
import './index.css';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')// eslint-disable-line
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/App/App', render);
}
