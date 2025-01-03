import dotenv from "dotenv";
dotenv.config();
import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening the PORT ${PORT}`);
});
