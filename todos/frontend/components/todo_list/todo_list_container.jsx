import {connect} from 'react-redux';
import TodoList from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors.js';

import {removeTodo, receiveTodos, receiveTodo} from "../../actions/actions.js";

const mapStateToProps = (state) => ({
    todos: allTodos(state),

});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
