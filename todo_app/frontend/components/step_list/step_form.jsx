import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', done: false, todo_id: this.props.todoId};
  }

  handleInput(e){
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }

  handleClick(e){
    e.preventDefault();
    this.props.createStep(this.state).then(
      () => this.setState({ title: ''})
    );
  }

  render() {
    return(
      <form>
        <label>Title
          <input onChange={this.handleInput.bind(this)} value={this.state.title} />
          <button onClick={this.handleClick.bind(this)}>Add Step</button>
        </label>
      </form>
    );
  }
}

export default StepForm;
