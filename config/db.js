import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
import mongoose from "mongoose";

const { Pool } = pg;

const DB_TYPE = process.env.DB_TYPE;

let pool = null;
let mongo = null;

if (DB_TYPE === "postgres") {
  pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });

  console.log("Connecté à PostgreSQL");
}

if (DB_TYPE === "mongo") {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connecté à MongoDB"))
    .catch((err) => console.log(err));

  mongo = mongoose;
}

export { DB_TYPE, pool, mongo };
