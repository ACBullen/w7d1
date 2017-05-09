import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoListForm from './todo_form.jsx';
const TodoList = ({todos, removeTodo, receiveTodo}) => (
  <div>
    <ul>
      {todos.map((todo, index)=> {
        return(
          <TodoListItem key={index} todo={todo} receiveTodo={receiveTodo} removeTodo={removeTodo} />
        );
      })}
    </ul>
    <TodoListForm receiveTodo={receiveTodo} />
  </div>
);

export default TodoList;
