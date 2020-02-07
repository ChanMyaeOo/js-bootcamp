let todos = [
  {
    text: 'read books',
    completed: false
  },
  {
    text: 'learn javascript',
    completed: true
  },
  {
    text: 'contribute open source',
    completed: false
  },
  {
    text: 'clean the room',
    completed: true
  },
  {
    text: 'do exercise',
    completed: false
  }
];

const filters = {
  searchText: '',
  hideCompleted: false
};

const renderTodos = function(todos, filter) {
  const filteredTodos = todos.filter(function(todo) {
    const isSearchTextMatch = todo.text
      .toLowerCase()
      .includes(filter.searchText.toLowerCase());
    const isHideCompletedMatch = !filter.hideCompleted || !todo.completed;
    return isSearchTextMatch && isHideCompletedMatch;
  });

  const uncompletedTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  // clear todo container (#todos) before rendering filtered todos
  document.querySelector('#todos').innerHTML = '';

  const todoSummary = document.createElement('h3');
  todoSummary.textContent = `You have ${uncompletedTodos.length} todos left`;
  document.querySelector('#todos').appendChild(todoSummary);

  filteredTodos.forEach(function(todo) {
    const paragraph = document.createElement('p');
    paragraph.textContent = todo.text;
    document.querySelector('#todos').appendChild(paragraph);
  });
};

renderTodos(todos, filters);

// listen for filtering todos
document.querySelector('#search-todo').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// listen for todo form submit
document.querySelector('#todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todoInput.value,
    completed: false
  });
  renderTodos(todos, filters);
  e.target.elements.todoInput.value = '';
});

// listen for hide completed checkbox
document
  .querySelector('#hide-completed')
  .addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
