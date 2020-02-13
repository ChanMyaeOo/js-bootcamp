// Read data from the localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
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
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const removeTodoBtn = document.createElement('button');
  const toggleCheckbox = document.createElement('input');

  // Setup checkbox to each todo
  toggleCheckbox.setAttribute('type', 'checkbox');
  containerEl.appendChild(toggleCheckbox);

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
  containerEl.appendChild(paragraph);

  // Setup container
  todoEl.classList.add('list-item');
  containerEl.classList.add('list-item__container');
  todoEl.appendChild(containerEl);

  // Setup remove note button
  removeTodoBtn.textContent = 'remove';
  removeTodoBtn.classList.add('button', 'button--text');
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
  todoSummary.classList.add('list-title');
  let plural = uncompletedTodos.length === 1 ? '' : 's';

  todoSummary.textContent = `You have ${uncompletedTodos.length} todo${plural} left`;
  return todoSummary;
};

// Render application's todos
const renderTodos = (todos, filter) => {
  const todosEl = document.querySelector('#todos');
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
  todosEl.innerHTML = '';

  todosEl.appendChild(generateSummaryDOM(uncompletedTodos));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach(todo => {
      todosEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = 'No todos to show';
    emptyMsg.classList.add('empty-message');
    todosEl.appendChild(emptyMsg);
  }
};
