import {connect} from 'react-redux';
import {removeStep, receiveStep, deleteStep, updateStep} from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = (dispatch) => ({
  removeStep: (step)=> dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step)),
  deleteStep: (step) => dispatch(deleteStep(step)),
  updateStep: (step) => dispatch(updateStep(step))
});


export default connect(null, mapDispatchToProps)(StepListItem);
