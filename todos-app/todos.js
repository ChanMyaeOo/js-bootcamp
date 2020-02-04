const todos = [
  {
    text: 'Read Book',
    completed: true
  },
  {
    text: 'Watch Tutorials',
    completed: true
  },
  {
    text: 'Do coding',
    completed: false
  },
  {
    text: 'Finish Project',
    completed: true
  },
  {
    text: 'Exercise',
    completed: false
  }
];

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
  let filterList = todoList.filter(el => {
    return el.text.toLowerCase().includes(filters.toLowerCase());
  });

  elements.todosWrap.innerHTML = '';

  const paragraph = document.createElement('h3');
  paragraph.textContent = `You have ${
    getUncompleted(filterList).length
  } todos left.`;
  elements.todosWrap.appendChild(paragraph);

  filterList.forEach(todo => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = todo.text;
    elements.todosWrap.appendChild(newParagraph);
  });
};

showTodos(todos, filter.filterText);

// Handle input change
elements.input.addEventListener('input', e => {
  filter.filterText = e.target.value;
  showTodos(todos, filter.filterText);
});

// Handle form submit
elements.todoForm.addEventListener('submit', e => {
  e.preventDefault();

  todos.push({
    text: e.target.elements.newTodo.value,
    completed: false
  });

  showTodos(todos, filter.filterText);
  e.target.elements.newTodo.value = '';
});

// Handle checkbox change
elements.showUncompleted.addEventListener('change', e => {
  filter.hideCompleted = e.target.checked;
  console.log(filter.hideCompleted);
});
