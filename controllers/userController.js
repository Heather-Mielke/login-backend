const express = require("express")
const user = express.Router()
const User = require('../models/User.js')

user.get("/", (req, res) => {
    res.send("Welcome!!")
    console.log(User)
}
)
user.get("/users", (req, res) => {
    User.find({}, (err, foundUsers) => {
        res.send(foundUsers)
        
    })
})

user.put("/login", (req, res) => {
    let result = User.find(user => user.Username == req.body.Username);
    if(result) {
        if(result.Password == req.body.password){
            res.status(200). send( {
                message: "Successful Login!!"
            })
        }else {
            res.status(200).send({
                message: "Password Incorrect!!"
            })
        }
    }else{
        res.status(200).send({
            message: "User not Found!!"
        })
    }
})

module.exports = user