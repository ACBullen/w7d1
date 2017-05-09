import React from 'react';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let steps = this.props.steps;

    return (
      <ul>
        {steps.map((step, index) => (
          <StepListItemContainer key={index} step={step} />
        ))}

      </ul>
    );
  }

}

export default StepList;
