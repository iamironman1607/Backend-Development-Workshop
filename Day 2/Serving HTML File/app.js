const app = require('express')();

app.get("/", (req, res)=>{
    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay === 6 || currentDay ===0){
        // res.send("Hurraah! Weekend");
        res.sendFile(__dirname + "/weekend.html");
    }else{
        // res.send("Ohh again a working day");
        res.sendFile(__dirname + "/weekday1.html");
    }
})


app.listen(3000, ()=>{
    console.log("Server up at 3000");
})