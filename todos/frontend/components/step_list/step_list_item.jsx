import React from 'react';


class StepListItem extends React.Component {
  constructor (props) {
    super(props);
    this.step = this.props.step;
    this.state = { done: this.props.step.done };
  }

  handleToggle(e) {
    e.preventDefault();
    // console.log(this.props.step)
    this.step.done = !this.step.done;
    this.props.receiveStep(this.step);
    this.setState({done: this.step.done});
  }

  render() {
    let step = this.step;
    return (
      <ul>
        <li>Title: {step.title}</li>
        <button onClick={this.handleToggle.bind(this)}> {step.done ? "Complete" : "Incomplete"} </button>
      </ul>
    );
  }
}

export default StepListItem;
