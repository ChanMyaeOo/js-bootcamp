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
  body: document.querySelector('body'),
  button: document.getElementById('add-todo'),
  input: document.querySelector('#search-todo'),
  todosWrap: document.querySelector('#todos-wrap')
};

const getUncompleted = function(filteredList) {
  return filteredList.filter(todo => {
    return !todo.completed;
  });
};

const filter = {
  filterText: ''
};

const showTodos = function(todoList, filters) {
  const filterList = todoList.filter(el => {
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

// Haldle click event
elements.button.addEventListener('click', e => {
  console.log(e.target.textContent);
});

// Handle input change
elements.input.addEventListener('input', e => {
  filter.filterText = e.target.value;
  showTodos(todos, filter.filterText);
});
