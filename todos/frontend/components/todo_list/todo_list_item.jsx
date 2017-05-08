import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);


  }

  handleClick(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleDone(e) {
    e.preventDefault();
    let properties = this.props.todo;
    properties.done = !properties.done;

    this.props.receiveTodo(properties);
  }

  render(){
    return (
    <li> {this.props.todo.title}
      <br />
      <p> >>{this.props.todo.body}</p>
      <button onClick={this.handleDone.bind(this)}> {this.props.todo.done? "Complete": "Incomplete"} </button>
      <button onClick={this.handleClick.bind(this)}> Delete Task </button>
    </li>
  );
  }
}

export default TodoListItem;
