const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

class MeController {
    // [GET]  /me/stored/courses
    storedCourses(req, res, next) {
        // Xử lý bất đồng bộ: Promise
        Promise.all([
            Course.find(),
            Course.countDocuments(),
            Course.countDocumentsWithDeleted(),
        ])
            .then(([courses, count, allCount]) =>
                // kết quả trả về theo thứ tự hàm thực hiện: find() trả về courses, countDocumentsDeleted() trả về deletedCount
                res.render('me/stored-courses', {
                    deletedCount: allCount - count,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);

        // --- Lấy danh sách khóa học chưa xóa mềm
        // ------ Course.find({ deletedAt: null }) : deletedAt = null là giá trị của deletedAt trong db là null hoặc ko có deletedAt
        // Course.find()
        //     .then((courses) =>
        //         res.render('me/stored-courses', {
        //             courses: multipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);

        // --- Đếm số lượng khóa học đã xóa mềm
        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {})
        //     .catch(() => {})
    }

    // [GET]  /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted()
            .then((courses) => {
                courses = courses.filter((doc) => doc.deleted);

                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
