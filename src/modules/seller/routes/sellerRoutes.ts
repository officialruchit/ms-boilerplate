import { Router } from 'express';
import { sellerDashboard } from '../controller/sellerController';
import { sellerMiddleware } from '../../../middleware/sellerMiddleware';

const router = Router();

router.get('/dashboard',sellerMiddleware, sellerDashboard);

export default router;
