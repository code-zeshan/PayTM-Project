import express from "express"
import mainRouter from "./routes/index.js" 

const app = express();

app.use("/api/vi", mainRouter);