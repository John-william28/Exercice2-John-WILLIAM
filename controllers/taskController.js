import { getAllTasks, addTask, removeTask } from "../models/taskModel.js";

export const displayTasks = (req, res) => {
  res.json(getAllTasks());
};

export const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Le champ 'title' est requis" });
  }
  const newTask = addTask(title);
  res.status(201).json(newTask);
};

export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = removeTask(id);
  if (!deleted) {
    return res.status(404).json({ message: "Tâche non trouvée" });
  }
  res.json(deleted);
};
