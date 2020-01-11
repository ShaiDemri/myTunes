const express = require('express');
const mediaController = require('../controller/mediaController');
const router = express.Router();

router.get('/top10', mediaController.fetchTop10);
router.get('/:query', mediaController.fetchMedia);

module.exports = router;