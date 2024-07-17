import { Router } from "express";
import { adminDashboard } from "../controller/adminController";
import { adminMiddleware } from "../../../middleware/adminMiddleware";
const router = Router();
router.get("/dashboard", adminMiddleware, adminDashboard);

export default router;
