const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('public/index', { user: req.session.user });
});

router.get('/docs', (req, res) => {
	res.render('public/docs', { user: req.session.user });
});

module.exports = router;
