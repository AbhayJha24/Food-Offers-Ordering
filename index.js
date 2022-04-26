const path = require('path')
const express = require('express')
const bodyParser = require("body-parser")
const user = require("./db")
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.use(express.static(path.join(__dirname,"./frontend/build")))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/' , (req , res)=>{

    res.send(index.html)

})

app.post('/checklogin', async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    await user.findOne({ email: email }).then(data => {
        if(data){
            if (data["pass"] == password) {
                res.status(200).send("Login Sucessful")
            }
            else{
                res.status(401).send("Wrong Password")
            }
        }
        else{
            res.status(401).send("Invalid User")
        }
    }, err => {
        console.log(err)
    })
})

app.post('/registerUser', async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const phone = req.body.phone

    const newUser = new user({ name: name, phone: phone, email: email, pass: password });
    await newUser.save(err =>{
        if (err) {
            console.log(err)
        }
        else{
            res.status(200).send("Added successfully")
        }
    })
})

app.get('*', (req,res) => {
    res.status(404).send("404 Not Found")
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))