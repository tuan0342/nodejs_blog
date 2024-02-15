const Course = require('../models/Course');

class SiteController {
    // [GET]  /
    async index(req, res) {
        try {
            let data = await Course.find({});
            if (data) {
                res.json(data);
            }

            // res.render('home');
        } catch (error) {
            res.status(500).json({ error: 'ERROR' });
        }
    }

    // [GET]  /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
