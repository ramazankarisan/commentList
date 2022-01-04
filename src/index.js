import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import PostState from './context/PostState';
import { allReducers } from './store/reducers/allReducers';


const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(allReducers, composedEnhancer)


ReactDOM.render(
  <Provider store={store}  >
    <PostState>
      <App />
    </PostState>
  </Provider>
  ,
  document.getElementById('root')
);

