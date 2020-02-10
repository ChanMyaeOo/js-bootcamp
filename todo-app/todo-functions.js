// Read data from the localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  return todosJSON ? JSON.parse(todosJSON) : [];
};

// Save todo to the localStorage
const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove todo from the list
const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle todo -> Completed OR Uncompleted
const toggleTodo = id => {
  const todo = todos.find(todo => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Generate todo DOM
const generateTodoDOM = todo => {
  const todoEl = document.createElement('div');
  const removeTodoBtn = document.createElement('button');
  const toggleCheckbox = document.createElement('input');

  // Setup checkbox to each todo
  toggleCheckbox.setAttribute('type', 'checkbox');
  todoEl.appendChild(toggleCheckbox);

  // Handle checkbox toggle
  toggleCheckbox.checked = todo.completed;
  toggleCheckbox.addEventListener('change', e => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup note
  const paragraph = document.createElement('span');
  paragraph.textContent = todo.text;
  todoEl.appendChild(paragraph);

  // Setup remove note button
  removeTodoBtn.textContent = 'x';
  todoEl.appendChild(removeTodoBtn);

  // Handle remove note
  removeTodoBtn.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Generate DOM elements for todo summary
const generateSummaryDOM = uncompletedTodos => {
  const todoSummary = document.createElement('h3');
  todoSummary.textContent = `You have ${uncompletedTodos.length} todos left`;
  return todoSummary;
};

// Render application's todos
const renderTodos = (todos, filter) => {
  const filteredTodos = todos.filter(function(todo) {
    // debugger;
    const isSearchTextMatch = todo.text
      .toLowerCase()
      .includes(filter.searchText.toLowerCase());
    const isHideCompletedMatch = !filter.hideCompleted || !todo.completed;
    return isSearchTextMatch && isHideCompletedMatch;
  });

  const uncompletedTodos = filteredTodos.filter(todo => !todo.completed);

  // clear todo container (#todos) before rendering filtered todos
  document.querySelector('#todos').innerHTML = '';

  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(uncompletedTodos));

  filteredTodos.forEach(todo => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};
