import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';

import {removeTodo, receiveTodos, receiveTodo, deleteTodo} from "../../actions/actions.js";
import {receiveSteps} from "../../actions/step_actions.js";

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
