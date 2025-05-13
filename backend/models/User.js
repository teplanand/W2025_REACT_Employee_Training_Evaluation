const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define allowed roles (excluding admin)
const ALLOWED_ROLES = ['employee', 'instructor'];

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(email) {
                // Prevent registration with admin email
                return email !== 'admin@gmail.com';
            },
            message: 'This email is reserved for admin use'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ALLOWED_ROLES, // Only allow 'employee' and 'instructor' roles
        default: 'employee'
    },
    department: {
        type: String,
        required: false
    },
    profile: {
        firstName: String,
        lastName: String,
        avatar: String,
        bio: String
    },
    preferences: {
        theme: String,
        notifications: Boolean
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Prevents manual role assignment to 'admin'
userSchema.pre('save', function(next) {
    if (this.role === 'admin') {
        this.invalidate('role', 'Admin role is not allowed');
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
