//NODE Native/Core modules
const fs = require('fs'); //file system

fs.writeFile("message.txt", "Here! we are using core node modules", (err)=>{

if(err) throw err; 
console.log("succesfully saved the file");
});

fs.readFile("message.txt",'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
})
