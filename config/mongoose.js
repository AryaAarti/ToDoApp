const mongoose = require('mongoose');

// Connectiong to DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;

// if any error occured during connection
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// if db connected successfully
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;