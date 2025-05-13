const mongoose = require('mongoose');

const courseRegistrationSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    courseTitle: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 16,
        max: 80
    },
    birthDate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    enrollmentNumber: {
        type: String,
        required: true
    },
    collegeId: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true,
        match: [/^\d{6}$/, 'Please enter a valid 6-digit PIN code']
    },
    guardianName: {
        type: String,
        required: true
    },
    guardianContact: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    howDidYouHear: {
        type: String,
        required: false
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CourseRegistration', courseRegistrationSchema); 