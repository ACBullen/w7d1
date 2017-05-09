const APIUtils = {
  fetchAllTodos: function() {
    return $.ajax({
      method: "GET",
      url: "api/todos#index",
    });
  }
};
