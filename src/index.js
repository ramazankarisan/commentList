import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import PostState from './context/PostState';
import { allReducers } from './store/reducers/allReducers';


const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}  >
    <PostState>
      <App />
    </PostState>
  </Provider>
  ,
  document.getElementById('root')
);

