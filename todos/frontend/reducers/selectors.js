
export const allTodos = (state) => {
  let arrayIds = Object.keys(state.todos);
  return arrayIds.map((id) => {
    return state.todos[id];
  });

};
