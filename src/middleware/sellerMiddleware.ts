import { Request, Response, NextFunction } from "express";
import { auth } from "../middleware/authMiddleware";

export const sellerMiddleware = [
  auth,
  (req: Request, res: Response, next: NextFunction) => {
    if (req.role !== "seller") {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  },
];
