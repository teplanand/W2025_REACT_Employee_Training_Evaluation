const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    employeeName: {
        type: String,
        required: true
    },
    courseId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    completionDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['passed', 'failed'],
        required: true
    },
    feedback: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Assessment', assessmentSchema); 