const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b, // tự tạo định nghĩa hàm (dùng trong việc tăng index của mảng)
    sortable: (field, sort) => {
        const sortType =
            field === sort.column && ['asc', 'desc'].includes(sort.type)
                ? sort.type
                : 'default';

        const addressAsc = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=asc`,
        );
        const addressDesc = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=desc`,
        );

        const icons = {
            default: `<a href="${addressAsc}">^</a>
                      <a href="${addressDesc}">v</a>`,
            asc: `<a href="${addressDesc}">v</a>`,
            desc: `<a href="${addressAsc}">^</a>`,
        };

        const icon = icons[sortType];

        return new Handlebars.SafeString(icon);
    },
};
