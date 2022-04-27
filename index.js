const path = require('path')
const express = require('express')
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const multer = require("multer")
const jwt = require("jsonwebtoken")
const user = require("./db")
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.use(express.static(path.join(__dirname,"./frontend/build")))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(multer().none())

app.use(cookieParser())

app.get('/' , (req , res)=>{

    res.send(index.html)

})

app.get('/authcheck', async (req, res) => {
    if(req.cookies.authtoken){
        try{
        const token = await jwt.verify(req.cookies.authtoken, process.env.SECRET_KEY)
        
        await user.findOne({ _id: token["id"] }).then(async data => {
            if (data) {
                res.status(200).send("Authenticated")
            }
            else{
                res.status(401).send("Unauthorized")
            }
        })
    }
        catch{
            res.status(400).send("Couldn't verify JWT")
        }
    }
    else{
        res.status(401).send("Unauthorized")
    }
})

app.post('/checklogin', async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    await user.findOne({ email: email }).then(async data => {
        if(data){
            if (data["pass"] == password) {
                const token = await jwt.sign({id: data["_id"]}, process.env.SECRET_KEY)
                res.status(200).cookie("authtoken", token).send("Login Sucessful")
            }
            else{
                res.status(401).send("Wrong Password")
            }
        }
        else{
            res.status(401).send("Invalid User")
        }
    }, err => {
        res.status(500).send("Internal Server Error")
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
            res.status(500).send("Internal Server Error")
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