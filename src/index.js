const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db/index');

// Connect to db
db.connect();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware xử lý việc lưu data vào req.body (POST method)
app.use(
    express.urlencoded({
        extended: true,
    }),
); // Trong TH như sử dụng form input
app.use(express.json()); // Trong TH client sd thư viện ngoài như: XMLHttpRequest, fetch, axios, ...

// Method-override
// override phương thức POST, PUT, DELETE,... VD: phía client vẫn gửi đi là POST nhưng phía server sẽ thực hiện là PUT
app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b, // tự tạo định nghĩa hàm (dùng trong việc tăng index của mảng)
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // do mỗi hệ điều hành sẽ viết khác nhau (window là '\\'...) vì thế nên tách ra như này
// app.set('views', path.join(__dirname, 'resources/views'));

// HOME, SEARCH, CONTACT: không thuộc tài nguyên nào cụ thể cả, không nên tạo 1 controller riêng cho mấy thằng này

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
