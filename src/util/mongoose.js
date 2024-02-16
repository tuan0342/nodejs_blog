module.exports = {
    // convert object của mongoose sang object của JS
    multipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map((mongoose) => mongoose.toObject());
    },

    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
