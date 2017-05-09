const APIUtils = {
  fetchAllTodos: function() {
    return $.ajax({
      method: "GET",
      url: "api/todos#index",
    });
  },
  createTodo: function(todo) {
    return $.ajax({
      method: "POST",
      url: "api/todos",
      data: todo
    });
  }
};


export default APIUtils;
