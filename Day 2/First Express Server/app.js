const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.status(200).json({Message:"Our first Server", sucess:"true"})
    res.sendFile(__dirname + "/index.html")
  });


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
});