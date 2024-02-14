const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware xử lý việc lưu data vào req.body (POST method)
app.use(
    express.urlencoded({
        extended: true,
    }),
); // Trong TH như sử dụng form input
app.use(express.json()); // Trong TH client sd thư viện ngoài như: XMLHttpRequest, fetch, axios, ...

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// HOME, SEARCH, CONTACT: không thuộc tài nguyên nào cụ thể cả, không nên tạo 1 controller riêng cho mấy thằng này

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
