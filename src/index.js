import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostState from './context/PostState';




ReactDOM.render(
  <PostState>
    <App />
  </PostState>

  ,
  document.getElementById('root')
);

