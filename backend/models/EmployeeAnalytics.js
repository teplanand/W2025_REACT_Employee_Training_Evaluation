const mongoose = require('mongoose');

const employeeAnalyticsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    performance: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    attendance: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    department: {
        type: String,
        default: 'General'
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('EmployeeAnalytics', employeeAnalyticsSchema); 