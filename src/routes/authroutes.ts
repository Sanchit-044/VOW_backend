import express from "express";
import { forgotPassword, login, register, resetPassword, verifyEmail, logout } from "../controllers/auth";
import { asyncHandler } from "../utils/asyncHandler";
import { validate } from "../middlewares/validate";
import {
  registerSchema,
  verifyEmailSchema,
  loginSchema,
  forgetPasswordSchema,
  resetPasswordSchema,
  logoutSchema
} from "../schemas/auth";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", validate(registerSchema), asyncHandler(register));
AuthRoutes.post("/verifyemail", validate(verifyEmailSchema), asyncHandler(verifyEmail));
AuthRoutes.post("/login", validate(loginSchema), asyncHandler(login));
AuthRoutes.post("/forgetpassword", validate(forgetPasswordSchema), asyncHandler(forgotPassword));
AuthRoutes.post("/resetpassword", validate(resetPasswordSchema), asyncHandler(resetPassword));
AuthRoutes.post("/logout", validate(logoutSchema), asyncHandler(logout));

export default AuthRoutes;
