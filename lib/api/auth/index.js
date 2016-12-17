import { Router } from 'express';

const router = Router();
router.post('/student', (req, res) => {
  console.log('student login', req.body.username, req.body.password);
});

router.post('/knight', (req, res) => {
  console.log('knight login', req.body.username, req.body.password);
});

export default router;
