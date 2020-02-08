// Read data from the localStorage
const getSavedTodos = function() {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todo to the localStorage
const saveTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Generate todo DOM
const generateTodoDOM = function(todo) {
  const todoEl = document.createElement('div');
  const removeTodoBtn = document.createElement('button');
  const toggleCheckbox = document.createElement('input');

  // Setup checkbox to each todo
  toggleCheckbox.setAttribute('type', 'checkbox');
  todoEl.appendChild(toggleCheckbox);

  // Setup note
  const paragraph = document.createElement('span');
  paragraph.textContent = todo.text;
  todoEl.appendChild(paragraph);

  // Setup remove note button
  removeTodoBtn.textContent = 'x';
  todoEl.appendChild(removeTodoBtn);

  return todoEl;
};

// Generate DOM elements for todo summary
const generateSummaryDOM = function(uncompletedTodos) {
  const todoSummary = document.createElement('h3');
  todoSummary.textContent = `You have ${uncompletedTodos.length} todos left`;
  return todoSummary;
};

// Render application's todos
const renderTodos = function(todos, filter) {
  const filteredTodos = todos.filter(function(todo) {
    // debugger;
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

  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(uncompletedTodos));

  filteredTodos.forEach(function(todo) {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};
