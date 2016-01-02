import React                  from 'react';
import ReactDOM               from 'react-dom';

import { Provider }             from 'react-redux';
import configureStore         from './store/configureStore';

import { Router }               from 'react-router';
import routes                   from './routes';

import createBrowserHistory   from 'history/lib/createBrowserHistory';


import Root                   from './containers/Root';

import 'styles/main.css';
import 'styles/skins/skin-blue.css';

const rootElement  = document.getElementById('root');
const history = createBrowserHistory();
const store   = configureStore(window.__INITIAL_STATE__, __DEBUG__);

let injectTapEventPlugin = require('react-tap-event-plugin');

// syncReduxAndRouter(history, store);

// const nodexx = (
//   <Root
//     history={history}
//     store={store}
//     debug={__DEBUG__}
//     debugExternal={__DEBUG_NW__} />
// );

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  }
)

injectTapEventPlugin();

const node = (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      {routes}
    </Router>
  </Provider>
);

ReactDOM.render(node, rootElement);
