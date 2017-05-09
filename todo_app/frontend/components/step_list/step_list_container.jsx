import { connect } from 'react-redux';
import StepList from './step_list.jsx';
import {stepsByTodoId} from '../../reducers/selectors';

import { receiveSteps, receiveStep, removeStep } from "../../actions/step_actions.js";

const mapStateToProps = (state, ownProps) => ({
  steps: stepsByTodoId(state, ownProps.todoId),
  todoId: ownProps.todoId
});

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step)=> dispatch(receiveStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
