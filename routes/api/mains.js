const router = require('express').Router();
const mainController = require('../../controllers/mainController');

// Matches with "/api/mains"
router.route('/').get(mainController.findAll).post(mainController.create);

// Matches with "/api/main/:id"
router.route('/:id').get(mainController.findById).put(mainController.update).delete(mainController.remove);

module.exports = router;
