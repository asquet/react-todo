import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.css';

import ReduxApp from './components/App/ReduxApp';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')// eslint-disable-line
  );
};

render(ReduxApp);

if (module.hot) {
  module.hot.accept('./components/App/ReduxApp', () => {
    render(ReduxApp);
  });
}
