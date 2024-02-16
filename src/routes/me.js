const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// Tuyến đường được đọc từ trên xuống, nên thằng gốc phải đặt ở dưới cùng
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
