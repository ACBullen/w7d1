import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteTodo(this.props.todo);
  }

  render() {
    let todo = this.props.todo;
    let {id, body, title, steps } = todo;
    debugger
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>body:{body}</li>
        </ul>
        {todo.tags.map((tag, index)=> <li key={index}>{tag.name}</li> )}
        <button onClick={this.handleDelete.bind(this)}> Delete Task </button>
        <StepListContainer todoId={id}/>
      </div>);
  }
}


export default TodoDetailView;
