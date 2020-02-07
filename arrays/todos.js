let todos = [
  {
    text: 'read books',
    completed: true
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

const removeTodo = function(todos, text) {
  const index = todos.findIndex(function(todo, index) {
    return todo.text.toLowerCase() === text.toLowerCase();
  });

  if (index !== -1) todos.splice(index, 1);
};

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

const getThingsToDo = function(todos) {
  return todos.filter(function(todo, index) {
    return !todo.completed;
  });
};

// removeTodo(todos, 'clean the room');
// console.log(todos);

// console.log(getThingsToDo(todos));

sortTodos(todos);
console.log(todos);
