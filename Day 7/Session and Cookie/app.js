const app = require('express')();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/set-cookie', (req, res)=>{

    // res.setHeader('Set-Cookie', 'user=true');

    res.cookie('tttemp', false, {maxAge: 1000 * 60 *60, httpOnly:true});
    res.send('cookie has been sent');

});
app.get('/', (req, res)=>{

    console.log(req.cookies);

    res.json(req.cookies)
})


app.listen(3000, console.log('server running'))