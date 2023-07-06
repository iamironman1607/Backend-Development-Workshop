const express = require('express');
const app = express();
const PORT  = 8080;
const path = require('path');
//parses incoming requests with JSON payloads.
app.use(express.json());
//parses incoming requests with URL-encoded payloads.
app.use(express.urlencoded({extended:true}));


//Setting up webpage rendering using template files
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{

    res.render('index');
})
app.get('/form', (req, res)=>{

    res.render('form');
})

app.get('/signup', (req, res)=>{
    res.render('signup')
})

app.post('/signup', (req, res)=>{
    
    console.log(req.body);

    res.status(200).json({message:"Getting the data", data:req.body})

})

app.listen(PORT, console.log(`Server Up at ${PORT}`));