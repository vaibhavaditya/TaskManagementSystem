import express from "express";

import authMiddleware
from "../middleware/auth.middleware.js";

import roleMiddleware
from "../middleware/role.middleware.js";

import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";

const router = express.Router();

/*
  Admin Routes
*/

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getAllUsers
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  getSingleUser
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateUser
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteUser
);

export default router;