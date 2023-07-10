const user = require('../models/userModel');
exports.getHome = (req, res, next)=>{

    res.render('store');
}

exports.getSignup = (req, res)=>{
    res.render('signup')
}


exports.postSignup =  async (req, res)=>{
    console.log(req.body);

    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(301).json({message:"All fields are mandatory!", success:false})
    }
    else{

        try{
                const isRegistered = await user.findOne({email});
                // console.log(isRegistered);
                if(isRegistered){

                    return res.status(301).json({message:"You are already registered", success:false})
                }
                else{
                     
                    user.create({name, email, password});
                    return res.status(201).json({message:"User Created Successfully", success:true})
                }
            //  

            // const User = new user({name, email, password})
            // User.save();


        }catch(err){

            return res.status(501).json({message:err.message, success:false});

        }
    }

}
// module.exports = {getHome, getSignup};