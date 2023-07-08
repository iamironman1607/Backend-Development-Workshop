const express = require('express');
const app = express();
const PORT  = 8080;
const path = require('path');
const mongoose = require('mongoose');
//parses incoming requests with JSON payloads.
app.use(express.json());
//parses incoming requests with URL-encoded payloads.
app.use(express.urlencoded({extended:true}));


//Setting up webpage rendering using template files
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String

  } , {
    timestamps:true
  });

  const user = mongoose.model('user', userSchema);

app.get('/', (req, res)=>{

    res.render('index');
})

app.get('/signup', (req, res)=>{
    res.render('signup')
})

app.post('/signup', async (req, res)=>{
    console.log(req.body);

    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(301).json({message:"All fields are mandatory!", success:false})
    }
    else{

        try{
                const isRegistered = await user.findOne({email});
                console.log(isRegistered);
                if(isRegistered){

                    return res.status(301).json({message:"You are already registered", success:false})
                }
                else{
                     
                    user.create({name, email, password});
                }
            //  

            // const User = new user({name, email, password})
            // User.save();

             return res.status(201).json({message:"User Created Successfully", success:true})

        }catch(err){

            return res.status(501).json({message:err.message, success:false});

        }
    }



})


mongoose.connect('mongodb+srv://globsyn:globsyn@globsyn.ocryiwb.mongodb.net/globsyn_DB')
.then((result)=>{
    console.log("DB Connected");
    app.listen(PORT, console.log(`Server Up at ${PORT}`));

})
.catch((err)=>{

    console.log("DB Connection Failed", err.message);
    

})