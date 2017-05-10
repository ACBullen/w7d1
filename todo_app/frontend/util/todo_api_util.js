const APIUtils = {
  fetchAllTodos: function() {
    return $.ajax({
      method: "GET",
      url: "api/todos#index",
    });
  },
  createTodo: function(todo) {
    // console.log("I have run");
    // debugger;
    return $.ajax({
      method: "POST",
      url: "api/todos",
      data: {todo}
    });
  },

  updateTodo: function(todo) {
    return $.ajax({
      method: "PATCH",
      url: `api/todos/${todo.id}`,
      data: {todo}
    });
  },

  deleteTodo: function(todo) {
    return $.ajax({
      method: "DELETE",
      url: `api/todos/${todo.id}`
    });
  }
};


export default APIUtils;
