const mongoose = require('mongoose');

const employeeProgressSchema = new mongoose.Schema({
    employee: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    completion: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('EmployeeProgress', employeeProgressSchema); 