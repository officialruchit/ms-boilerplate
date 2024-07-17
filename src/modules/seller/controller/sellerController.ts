import { Request, Response } from 'express';

export const sellerDashboard = (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the seller dashboard' });
};
