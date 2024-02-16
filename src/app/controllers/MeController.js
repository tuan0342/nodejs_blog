const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

class MeController {
    // [GET]  /me/stored/courses
    storedCourses(req, res, next) {
        //Course.find({ deletedAt: null }) : deletedAt = null là giá trị của deletedAt trong db là null hoặc ko có deletedAt
        Course.find()
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET]  /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted()
            .then((courses) => {
                courses = courses.filter((doc) => doc.deleted);

                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                });

                return;
            })
            .catch(next);
    }
}

module.exports = new MeController();
