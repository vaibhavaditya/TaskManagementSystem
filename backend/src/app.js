import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { errorMiddleware } from "./middleware/error.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use("/uploads", express.static("src/uploads"));

/*
  Main Routes
*/

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Main page");
});

app.use(errorMiddleware);

export default app;