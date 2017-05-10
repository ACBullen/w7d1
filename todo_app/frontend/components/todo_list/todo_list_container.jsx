import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import {allTodos, allErrors} from '../../reducers/selectors.js';

import {removeTodo, createTodo, receiveTodos, receiveTodo, fetchTodos, updateTodo} from "../../actions/actions.js";

const mapStateToProps = (state) => ({
    todos: allTodos(state),
    errors: allErrors(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
