const express = require('express')
const user = express.Router()
const User = require('../models/User.js')

//testing
user.get("/", (req, res) => {
    res.send("Welcome!!")
    console.log(User)
}
)

//display user by id
user.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, foundUser)=>{
        res.json(foundUser)
    })
})

//displays all users in database
user.get('/users', (req, res) => {
    User.find({}, (err, foundUsers) => {
        res.send(foundUsers)
        
    })
})

//log in
user.post('/login', (req,res) => {
   let username = req.body.Username;
   let password = req.body.Password;
    //if no username or password is entered
   if(!username || !password) {
       res.json({message: "Username or Password is not Present!"})
       res.redirect()
   }

 User.findOne({Username: username, Password:password}, function(error, user) {
       if(error){//does not catch correctly (refactor)
           console.log(err)
           res.json({message: "Password is Incorrect!"});
       }
       if(!user) {
           res.json({message: "Username or Password is Incorrect!"})
       }else{
        res.status(200).json({
            message: "Login Successful",
            user,
        })
       
       }
       return res.status(200).send()
       
   })
})

module.exports = user