import React from 'react';
import TodoDetailViewContainer from "./todo_detail_view_container";
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};

  }



  handleDone(e) {
    e.preventDefault();
    let properties = this.props.todo;
    properties.done = !properties.done;

    this.props.updateTodo(properties);
  }

  toggleDetail(e) {
    e.preventDefault();
    // if (e.target === e.currentTarget){

      this.setState({detail: !this.state.detail});
    // }
  }

  render(){
    return (
      <div className="TodoListItem">
    <li onClick = {this.toggleDetail.bind(this)} > {this.props.todo.title}
    </li>
    <button onClick={this.handleDone.bind(this)}> {this.props.todo.done? "Complete": "Incomplete"} </button>
    { this.state.detail ? <TodoDetailViewContainer todo={this.props.todo} /> : ""}
    </div>
);
  }
}

export default TodoListItem;
