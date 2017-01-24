import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux Dependencies
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App/>
    </div>
  </Provider>, document.querySelector('#root'))
