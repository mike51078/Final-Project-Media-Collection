const path = require('path');
const router = require('express').Router();
const mainRoutes = require('./api');

// API Routes
router.use('/api', mainRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

module.exports = router;
