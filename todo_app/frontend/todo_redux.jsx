import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Root from './components/root.jsx';
import store from './store/store.js';

import {allTodos, stepsByTodoId} from './reducers/selectors.js';
import {RECEIVE_TODOS, RECEIVE_TODO, fetchTodos, receiveTodos, receiveTodo} from "./actions/actions.js";
import App from './components/app.jsx';

window.store = store;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.stepsByTodoId = stepsByTodoId;
window.fetchTodos = fetchTodos;

document.addEventListener("DOMContentLoaded", () =>{
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('content')
  );
});
