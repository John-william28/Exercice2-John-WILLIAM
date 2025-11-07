import { DB_TYPE, pool } from "../config/db.js";
import { Task } from "../models/taskModel.js"; 

export const displayTasks = async (req, res) => {
  if (DB_TYPE === "postgres") {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
    res.json(result.rows);
  } else if (DB_TYPE === "mongo") {
    const tasks = await Task.find();  
    res.json(tasks);
  }
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  if (DB_TYPE === "postgres") {
    const result = await pool.query(
      "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
      [title]
    );
    res.json(result.rows[0]);
  } else if (DB_TYPE === "mongo") {
    const task = new Task({ title });
    await task.save();               
    res.json(task);
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (DB_TYPE === "postgres") {
    await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    res.json({ message: "Tâche supprimée" });
  } else if (DB_TYPE === "mongo") {
    await Task.findByIdAndDelete(id);
    res.json({ message: "Tâche supprimée" });
  }
};
