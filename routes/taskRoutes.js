import express from "express";
import { displayTasks, createTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", displayTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);

export default router;
