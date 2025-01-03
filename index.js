import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnection from "./db/dbConnection.js";

const PORT = process.env.PORT || 3000;

const app = express();

dbConnection();

app.listen(PORT, () => {
  console.log(`Server listening the PORT ${PORT}`);
});
