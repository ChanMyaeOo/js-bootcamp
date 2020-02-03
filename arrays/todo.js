const todos = [
  {
    text: 'Read Book',
    completed: false
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
    completed: true
  }
];

const deleteTodo = (todos, text) => {
  const index = todos.findIndex(
    todo => todo.text.toLowerCase() === text.toLowerCase()
  );
  if (index > -1) todos.splice(index, 1);
};

const getTodoThings = todos => {
  return (result = todos.filter(todo => {
    return todo.completed === false;
  }));
};

// deleteTodo(todos, 'exercise');
// console.log(todos);

console.log(getTodoThings(todos));
