import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface JwtPayload {
  userId: string;
  role: string;
}

// Extend the Request interface locally
declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
    role?: string;
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.header("Authorization");
    const token = header && header.split(" ")[1];
    if (token == null) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    const decoded = Jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
