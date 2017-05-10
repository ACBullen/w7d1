
export const allTodos = (state) => {
  let arrayIds = Object.keys(state.todos);
  return arrayIds.map((id) => {
    return state.todos[id];
  });

};

export const stepsByTodoId = (state, id) => {
  let arrayIds = Object.keys(state.steps).filter( (key) => {

    return (id === state.steps[key].todo_id);
  });

  return arrayIds.map((id)=> {
    return state.steps[id];
  });
};

export const allErrors = (state) => {
  return state.errors;
};
