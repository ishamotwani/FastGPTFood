import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.json("Server is running on port 3000");
});
app.listen(3000, () => {
  connectDB();
});
