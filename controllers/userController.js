const express = require("express")
const user = express.Router()
const User = require('../models/userdata')


user.get("/", (req, res) => {
    User.findOneAndDelete({}, (err, foundUsers) => {
        res.json(foundUsers)
    })
})

user.put("/login", (req, res) => {
    console.log(req.body)
})