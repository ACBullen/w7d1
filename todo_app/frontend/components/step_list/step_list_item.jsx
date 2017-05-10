import React from 'react';


class StepListItem extends React.Component {
  constructor (props) {
    super(props);
    this.step = this.props.step;
  }

  handleToggle(e) {
    e.preventDefault();
    // console.log(this.props.step)
    this.step.done = !this.step.done;
    this.props.updateStep(this.step);
    // this.setState({done: this.step.done});
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteStep(this.step);
  }

  render() {
    let step = this.step;
    return (
      <ul>
        <li>Title: {step.title}</li>
        <button onClick={this.handleToggle.bind(this)}> {step.done ? "Complete" : "Incomplete"} </button>
        <button onClick={this.handleDelete.bind(this)} > Delete Step </button>
      </ul>
    );
  }
}

export default StepListItem;
