import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import openaiRoute from "./src/routes/openai.js";

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/openai", openaiRoute);

app.listen(port, () => {
  console.log("App already running on " + port);
});
