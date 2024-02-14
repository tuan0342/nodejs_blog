const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Tuyến đường được đọc từ trên xuống, nên thằng gốc phải đặt ở dưới cùng
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
