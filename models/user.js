const mongoose = require('mongoose');

// DB Schema
const userSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
        
    },
    category: {
        type: String
       
    },
    date: {
        type: Date
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;