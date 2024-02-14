const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Tuyến đường được đọc từ trên xuống, nên thằng gốc phải đặt ở dưới cùng
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
