const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 8000;

//Setting middleware
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/routes'));
app.use(express.static('assets'));

//Setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//listening on port 8000
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
    
});