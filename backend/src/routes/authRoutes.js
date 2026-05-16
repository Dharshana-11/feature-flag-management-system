import express, { Router } from "express";
import { loginSuperAdmin } from "../controllers/authController.js";

const router = express.Router();

//Super admin login
router.post("/super-admin/login", loginSuperAdmin);

export default router;
