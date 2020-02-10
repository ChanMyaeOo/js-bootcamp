const todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
};

renderTodos(todos, filters);

// listen for filtering todos
document.querySelector('#search-todo').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// listen for todo form submit
document.querySelector('#todo-form').addEventListener('submit', e => {
  e.preventDefault();
  todos.push({
    id: uuid(),
    text: e.target.elements.todoInput.value,
    completed: false
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.todoInput.value = '';
});

// listen for hide completed checkbox
document.querySelector('#hide-completed').addEventListener('change', e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
