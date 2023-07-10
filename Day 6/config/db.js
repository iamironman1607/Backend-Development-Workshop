const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://globsyn:globsyn@globsyn.ocryiwb.mongodb.net/globsyn_DB')
.then((conn)=>{
    console.log("DB Connected");
})
.catch((err)=>{

    console.log("DB Connection Failed", err.message);
    
})

module.exports = mongoose;