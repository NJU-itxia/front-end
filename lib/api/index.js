import { Router } from 'express';

const router = Router();
router.use('/auth', require('./auth').default);

export default router;
