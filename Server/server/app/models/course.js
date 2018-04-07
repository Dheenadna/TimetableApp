var mongoose = require('mongoose');
 
var CourseSchema = new mongoose.Schema({
    _id: String,
    courseName: String,
    Monday: [
        {
            weeks: String,
            lecturer: String,
            moduleName: String,
            room: String,
            startTime: String,
            duration: String,
            moduleType: String,
            endTime: String,
        }
    ],
    Tuesday: [
        {
            weeks: String,
            lecturer: String,
            moduleName: String,
            room: String,
            startTime: String,
            duration: String,
            moduleType: String,
            endTime: String,
        }
    ],
    Wednesday: [
        {
            weeks: String,
            lecturer: String,
            moduleName: String,
            room: String,
            startTime: String,
            duration: String,
            moduleType: String,
            endTime: String,
        }
    ],
    Thursday: [
        {
            weeks: String,
            lecturer: String,
            moduleName: String,
            room: String,
            startTime: String,
            duration: String,
            moduleType: String,
            endTime: String,
        }
    ],
    Friday: [
        {
            weeks: String,
            lecturer: String,
            moduleName: String,
            room: String,
            startTime: String,
            duration: String,
            moduleType: String,
            endTime: String,
        }
    ]
});
 
module.exports = mongoose.model('Course',CourseSchema);