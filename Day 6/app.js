const express = require('express');
const app = express();
const PORT  = 8080;
const path = require('path');
const DB = require('./config/db');
//parses incoming requests with JSON payloads.
app.use(express.json());
//parses incoming requests with URL-encoded payloads.
app.use(express.urlencoded({extended:true}));

//Setting up webpage rendering using template files
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const userRoute = require('./routes/userRoutes');

app.use(userRoute);

DB.connection.on('error', (err)=>{
    console.log("Could not connect to DB", err.message);
})

DB.connection.on('open', ()=>{
    app.listen(PORT, console.log(`Server up at ${PORT}`));
})
