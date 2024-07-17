import { Request, Response, NextFunction } from 'express';
import { auth } from '../middleware/authMiddleware';

export const adminMiddleware = [auth, (req: Request, res: Response, next: NextFunction) => {
  if (req.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
}];
