export const RECEIVE_STEP = "RECEIVE_STEP";
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const REMOVE_STEP = "REMOVE_STEP";
import StepAPIUtils from '../util/step_api_utils';
import * as ErrorActions from './error_actions';
export const receiveSteps =  (steps) => ({
  type: RECEIVE_STEPS,
  steps: steps
});

export const receiveStep =  (step) => ({
  type: RECEIVE_STEP,
  step: step
});
export const removeStep =  (step) => ({
  type: REMOVE_STEP,
  step: step
});

export const deleteStep = (step) => dispatch => {
  return StepAPIUtils.deleteStep(step).then((_step)=>{
    return dispatch(removeStep(_step));
  });
};

export const createStep = (step) => dispatch => {
  return StepAPIUtils.createStep(step).then((_step)=>{
    dispatch(ErrorActions.clearErrors());
    return dispatch(receiveStep(_step));
  }, err=> { dispatch(ErrorActions.receiveErrors(err.responseJSON));

  });
};

export const updateStep = (step) => dispatch => {
  return StepAPIUtils.updateStep(step).then((_step)=> {
    dispatch(ErrorActions.clearErrors());
    return dispatch(receiveStep(_step));
  }, err=> {dispatch(ErrorActions.receiveErrors(err.responseJSON));
  });
};
