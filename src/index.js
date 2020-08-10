import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {myStore} from "./reducers/store";


ReactDOM.render(
      <Provider store={myStore}>
        <App />
      </Provider>,
  document.getElementById('root')
);
