import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// uses the local storage browser API
import { loadState, saveState } from './localStorage';
// throttle function  insures that it doesn't get called more often than once a second.
import throttle from 'lodash/throttle';

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedState = loadState();
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth,
    reviews: store.getState().reviews
  });
}, 1000));

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})

//team mega skux
