import config from 'config';
import { Router } from 'express';

const router = Router();
router.post('/student', (req, res) => {
	if (req.body.username === 'test' && req.body.password === 'test') {
		console.log('student logged in, account:', req.body.username);
		res.cookie(config.cookie_path.name, req.body.username, {
			signed: true,
		});
		// 用户信息最好用json-server查询
		res.send({
			userId: 'test',
			phoneNumber: '15800001111',
			type: 'student',
			name: '小明',
			email: 'xiaoming@163.com',
			campus: 'xianlin',
			orders: [1, 2, 3],
		});
	}
	else {
		res.send({
			error: '用户名和密码不匹配',
		});
	}
});

router.post('/knight', (req, res) => {
  console.log('knight login', req.body.username, req.body.password);
});

export default router;
