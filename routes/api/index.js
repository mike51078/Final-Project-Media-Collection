const path = require('path');
const router = require('express').Router();
const mainRoutes = require('./api');

router.use('/mains', mainRoutes);

router.use(function(req, res) {
	res.sendFile(path.join(___dirname, '../../client/build/index.html'));
});

module.exports.router;
