import express from "express"
import mainRouter from "./routes/index.js" 
import cors from "cors"

app.use(cors());
app.use(express.json());

const app = express();

app.use("/api/vi", mainRouter);

app.listen(3000,()=>{
    console.log(`The server is running!`);
})