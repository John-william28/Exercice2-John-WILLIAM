import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import { DB_TYPE, mongo, pool } from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());


app.use("/tasks", taskRoutes);


app.get("/test-connection", (req, res) => {
  if (DB_TYPE === "postgres") {
    pool.query("SELECT 1")
      .then(() => res.send("Connecté à PostgreSQL"))
      .catch((err) => res.status(500).send(err.message));
  } else if (DB_TYPE === "mongo") {
    const dbState = mongo.connection.readyState === 1 ? "Connecté à MongoDB" : " Non connecté";
    res.send(dbState);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${process.env.PORT}`);
});
