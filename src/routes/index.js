const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // route ngoài này dùng use. sau khi đi sâu vào trong thì dùng get/post/v.v... để check đúng phương thức mà ta mong muốn

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
