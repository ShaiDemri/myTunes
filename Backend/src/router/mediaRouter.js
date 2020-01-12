const express = require('express');
const mediaMiddleware = require('../middelwares/mediaMiddleware');
const mediaController = require('../controller/mediaController');
const router = express.Router();

router.get('/top10',mediaMiddleware.headerExtractor, mediaMiddleware.fetchTop10 ,mediaController.fetchTop10);
router.get('/:query',mediaMiddleware.headerExtractor, mediaMiddleware.fetchMedia,mediaMiddleware.storeTermInDb,mediaController.handleMedia);

module.exports = router;