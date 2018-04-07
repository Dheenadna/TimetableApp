var Course = require('../models/course');
 
exports.getCourses = function(req, res, next){

    Course.find({}, { '_id': 1, 'courseName': 1 }, function (err, courses) {
        if (err) {
            res.send(err);
            console.log(err)
        } else {
            res.json(courses);
        }
    }); 
}

exports.getTimetable = function(reg, res, next) {
    Course.find({
        _id: req.body._id,
    }, function (err, timetable) {
        if (err) {
            res.send(err);
        } else {
            res.json(timetable);
        }
    });
}
