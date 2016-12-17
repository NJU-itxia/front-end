import config from 'config';
import { Router } from 'express';

const router = Router();
router.post('/student', (req, res) => {
	if (req.body.username === 'test' && req.body.password === 'test') {
		console.log('student logged in', req.body.username);
		res.cookie(config.cookie_path.name, req.body.username, {
			signed: true,
		});
		res.end();
	}
});

router.post('/knight', (req, res) => {
  console.log('knight login', req.body.username, req.body.password);
});

export default router;
