import React from 'react';
import ReactDOM from 'react-dom';
import TDLContainer from "./todo_list/todo_list_container.jsx";
import TodoListForm from "./todo_list/todo_form.jsx";

import {removeStep, receiveSteps, receiveStep, REMOVE_STEP, RECEIVE_STEP, RECEIVE_STEPS} from '../actions/step_actions';

const App = () => (
  <div className="app_main">
  <h1>Something</h1>
  <TDLContainer />
  </div>
);

export default App;
