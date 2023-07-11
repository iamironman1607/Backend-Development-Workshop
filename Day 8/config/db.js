const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect("mongodb://localhost:27017/JWT_DB")
.then((conn)=>{
    console.log("DB Connected to",conn.connection.host);
})
.catch(err=>{
    console.log("DD Connection failed", err.message);
})

module.exports= mongoose;