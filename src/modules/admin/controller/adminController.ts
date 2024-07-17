import { Request, Response } from "express";

export const adminDashboard = (req: Request, res:Response) => {
  res.json({ message: 'Welcome to the admin dashboard' });
};
