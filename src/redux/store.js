import { createStore } from 'redux';
import todo from './reducers/todo';

export default function configureStore(initialState) {
  const store = createStore(todo, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//eslint-disable-line
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/todo', () => {
      store.replaceReducer(todo);
    });
  }

  return store;
}
