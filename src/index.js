import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//Redux setup
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
