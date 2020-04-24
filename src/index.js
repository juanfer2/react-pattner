import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './stylesSheets/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
import store from './flux/store'

ReactDOM.render(
  <Suspense fallback={'...'}>  
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
