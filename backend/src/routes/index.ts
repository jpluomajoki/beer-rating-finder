import { Router } from 'express';
import UserRouter from './Users';
import BeerRouter from './Beer';

// Init router and path
const router = Router();
console.log(BeerRouter);

// Add sub-routes
//router.use('/users', UserRouter);
router.use('/beer', BeerRouter);

// Export the base-router
export default router;
