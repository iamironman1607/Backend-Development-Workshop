const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname , 'public')));
 var name = "Shubham";

app.get('/', (req, res)=>{

    res.render('index',{myName:name, address:"Park Street",collegeName:"UEM Kolkata",  favFood :" Pizza"});
})

app.get('/vote', (req, res)=>{

    res.render('vote', {age:18});
})

app.listen(8080, console.log('Server up at  8080'))