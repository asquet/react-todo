import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/App/App';
import configureStore from './redux/store';
import './index.css';

const store = configureStore(window.__data);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key="provider">
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')// eslint-disable-line
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/App/App', render);
}
