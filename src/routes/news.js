const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// Tuyến đường được đọc từ trên xuống, nên thằng gốc phải đặt ở dưới cùng
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
