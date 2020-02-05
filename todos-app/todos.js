let todos = [];

const todosJSON = localStorage.getItem('todos');
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

const elements = {
  input: document.querySelector('#search-todo'),
  todosWrap: document.querySelector('#todos-wrap'),
  todoForm: document.querySelector('#todo-form'),
  showUncompleted: document.querySelector('#show-uncompleted')
};

const getUncompleted = function(filteredList) {
  return filteredList.filter(todo => {
    return !todo.completed;
  });
};

const filter = {
  filterText: '',
  hideCompleted: false
};

const showTodos = function(todoList, filters) {
  const filterList = todoList.filter(el => {
    const searchTextMatch = el.text
      .toLowerCase()
      .includes(filters.filterText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !el.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  elements.todosWrap.innerHTML = '';

  const paragraph = document.createElement('h3');
  paragraph.textContent = `You have ${
    getUncompleted(filterList).length
  } todos left.`;
  elements.todosWrap.appendChild(paragraph);

  filterList.forEach(todo => {
    const newParagraph = document.createElement('span');
    const todoEl = document.createElement('div');
    const button = document.createElement('button');
    const checkbox = document.createElement('input');

    // Set up checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // Set up new todo
    newParagraph.textContent = todo.text;
    todoEl.appendChild(newParagraph);

    // Set up remove btn
    button.textContent = 'x';
    todoEl.appendChild(button);

    // Set up todoEl to the div container
    elements.todosWrap.appendChild(todoEl);
  });
};

showTodos(todos, filter);

// Handle input change
elements.input.addEventListener('input', e => {
  filter.filterText = e.target.value;
  showTodos(todos, filter);
});

// Handle form submit
elements.todoForm.addEventListener('submit', e => {
  e.preventDefault();

  todos.push({
    text: e.target.elements.newTodo.value,
    completed: false
  });

  localStorage.setItem('todos', JSON.stringify(todos));
  showTodos(todos, filter);
  e.target.elements.newTodo.value = '';
});

// Handle checkbox change
elements.showUncompleted.addEventListener('change', e => {
  filter.hideCompleted = e.target.checked;
  showTodos(todos, filter);
});
