import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoListForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTodos();
  }

  render (){
    const {todos, removeTodo, receiveTodo, fetchTodos, updateTodo} = this.props;
    return (
    <div className="todoList">
      <ul>
        {todos.map((todo, index)=> {
          return(
            <TodoListItem key={index} todo={todo} receiveTodo={receiveTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
          );
        })}
      </ul>
      <TodoListForm allErrors={this.props.errors} receiveTodo={receiveTodo} createTodo={this.props.createTodo} />
    </div>);
  }
}


export default TodoList;
