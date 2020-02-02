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
    completed: true
  },
  {
    text: 'Finish Project',
    completed: false
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

deleteTodo(todos, 'exercise');
console.log(todos);
