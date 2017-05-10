import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let steps = this.props.steps;

    return (
      <div className="StepList">
      <ul>
        {steps.map((step, index) => (
          <StepListItemContainer key={index} step={step} />
        ))}
      </ul>
      <StepForm todoId={this.props.todoId} createStep={this.props.createStep} />
      </div>
    );
  }

}

export default StepList;
