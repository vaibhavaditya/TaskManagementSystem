import express from "express";

import authMiddleware
from "../middleware/auth.middleware.js";

import {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask
} from "../controllers/task.controller.js";

const router = express.Router();

/*
  Protected Routes
*/

router.post(
  "/",
  authMiddleware,
  createTask
);

router.get(
  "/",
  authMiddleware,
  getAllTasks
);

router.get(
  "/:id",
  authMiddleware,
  getSingleTask
);

router.put(
  "/:id",
  authMiddleware,
  updateTask
);

router.delete(
  "/:id",
  authMiddleware,
  deleteTask
);

export default router;