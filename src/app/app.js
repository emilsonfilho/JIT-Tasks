import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

//use routes
app.use(routes);

export default app;
