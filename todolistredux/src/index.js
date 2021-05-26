import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList'
import TodoListReactRedux from './TodoListReactRedux';
import {Provider} from 'react-redux';
import store from './storeReactRedux';

const App=(
  //provider 連接store 且所有孩子都連接store
  <Provider store={store}>
    <TodoListReactRedux/>
  </Provider>
);



ReactDOM.render(
  App,
  document.getElementById('root')
);

