import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Root from './components/root.jsx';
import store from './store/store.js';

import {allTodos} from './reducers/selectors.js';
import {RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo} from "./actions/actions.js";
import App from './components/app.jsx';

window.store = store;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;


document.addEventListener("DOMContentLoaded", () =>{
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
