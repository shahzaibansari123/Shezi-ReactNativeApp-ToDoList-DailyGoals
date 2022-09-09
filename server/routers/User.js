import express from "express";
import {
  addTask,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeTask,
  updatePassword,
  updateProfile,
  updateTask,
  verify,
} from "../controllers/User.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/addtask").post(isAuthenticated, addTask);
router
  .route("/task/:taskId")
  .get(isAuthenticated, updateTask)
  .delete(isAuthenticated, removeTask);

router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/updatepassword").put(isAuthenticated, updatePassword);

router.route("/me").get(isAuthenticated, getMyProfile);

router.route("/forgetpassword").post(forgetPassword);

export default router;
