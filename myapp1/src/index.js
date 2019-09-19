import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './component/App/index';


import store from './redux/store';
import './index.css';
render(
  <Provider store={store}>
    <App />
  </Provider>
,
  document.getElementById('root'),
);
// unregister() to register() below. Note this comes with some pitfalls.