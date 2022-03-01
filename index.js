const path = require('path')
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname,"./frontend/build")))

app.get('/' , (req , res)=>{

    res.send(index.html)

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))