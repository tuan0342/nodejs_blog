const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET]  /
    async index(req, res, next) {
        // C1:
        // try {
        //     let data = await Course.find({});
        //     if (data) {
        //         res.json(data);
        //     }
        // } catch (error) {
        //     res.status(500).json({ error: 'ERROR' });
        // }

        // C2:
        Course.find({})
            .then((course) => {
                res.render('home', {
                    course: multipleMongooseToObject(course),
                });
            })
            .catch(next);
    }

    // [GET]  /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
