import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    let todo = this.props.todo;
    let {id, body, title, steps } = todo;
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>body:{body}</li>
        </ul>
        <button onClick={this.handleDelete.bind(this)}> Delete Task </button>
        <StepListContainer todoId={id}/>
      </div>);
  }
}


export default TodoDetailView;
