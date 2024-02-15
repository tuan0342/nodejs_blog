const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Tuyến đường được đọc từ trên xuống, nên thằng gốc phải đặt ở dưới cùng
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
