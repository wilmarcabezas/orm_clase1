import express from "express";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());


//Router
import testdrivers from "../routes/testdriver.router.js"

app.use('/testdrivers',testdrivers);

export default app;