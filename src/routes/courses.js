const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Tuyến đường được đọc từ trên xuống, nên thằng gốc phải đặt ở dưới cùng
router.get('/:slug', courseController.show);

module.exports = router;
