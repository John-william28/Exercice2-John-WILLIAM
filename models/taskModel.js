let tasks = [];
let nextId = 1;

export const getAllTasks = () => tasks;

export const addTask = (title) => {
  const newTask = { id: nextId++, title, completed: false };
  tasks.push(newTask);
  return newTask;
};

export const removeTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    return tasks.splice(index, 1)[0];
  }
  return null;
};
