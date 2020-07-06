import {Router} from 'express';
import BeerRouter from './Beer';

// Init router and path
const router = Router();
console.log(BeerRouter);

// Add sub-routes
router.use('/beer', BeerRouter);

// Export the base-router
export default router;
