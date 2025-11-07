import { DB_TYPE, mongo } from "../config/db.js";

let Task = null;

if (DB_TYPE === "mongo") {
  const taskSchema = new mongo.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  });

  Task = mongo.model("Task", taskSchema);
}

export { Task };
