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
    completed: false
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

const sortTodos = todos => {
  todos.sort((a, b) => {
    // if (b.completed < a.completed) {
    //   return 1;
    // }

    if (!a.completed && b.completed) return -1;
    else if (!b.completed && a.completed) return 1;
    else return 0;
  });
};

// deleteTodo(todos, 'exercise');
// console.log(todos);

// console.log(getTodoThings(todos));

sortTodos(todos);
console.log(todos);
