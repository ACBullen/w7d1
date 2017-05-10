// export const initialize = "initialize";
// export const addUpdate = "add_update";
import APIUtils from '../util/todo_api_util';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as ErrorActions from './error_actions';

// export const initializeStore = (todos)=> ({
//   type: initialize,
//   todos: todos
// });
//
// export const modifyTodo = (todo) => ({
//   type: addUpdate,
//   todo: todo
// });

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo: todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo: todo
});


export const fetchTodos = () => (dispatch)=> {
  return APIUtils.fetchAllTodos().then((todos)=>{
    let todoObj = {};
    todos.forEach( (todo) => {todoObj[todo.id] = todo;});
     return dispatch(receiveTodos(todoObj));
  });
};

export const createTodo = (todo) => (dispatch) => {
  return APIUtils.createTodo(todo).then((_todo)=>{
    dispatch(ErrorActions.clearErrors());
    return dispatch(receiveTodo(_todo));
  }, err => {
    console.log(err);
    // debugger;
    return dispatch(ErrorActions.receiveErrors(err.responseJSON));
  });
};

export const updateTodo = (todo) => (dispatch) => {
  return APIUtils.updateTodo(todo).then((_todo)=>{
    dispatch(ErrorActions.clearErrors());
    return dispatch(receiveTodo(_todo));
  }, err => {
    return dispatch(ErrorActions.receiveErrors(err.responseJSON));
  });
};

export const deleteTodo = (todo) => (dispatch) => {
  return APIUtils.deleteTodo(todo).then((_todo)=> {
    return dispatch(removeTodo(_todo));
  });
};
