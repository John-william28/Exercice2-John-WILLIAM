// routes/taskRoutes.js
import express from "express";
import {
  displayTasks,
  createTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();


router.get("/tasks", displayTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);

export default router;
