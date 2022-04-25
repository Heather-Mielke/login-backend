const express = require("express");
const app = express();
const fs = require("fs");
const fastcsv = require("fast-csv")
const parse = require("csv-parser")
const mongoose = require("mongoose")
const path = require("path");
const csvModel = require("./models/User")
const csv = require("csvtojson");
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb").MongoClient;
const User = require("./models/User")
const userController = require('./controllers/userController');
const db = mongoose.connection
const bodyParser = require("body-parser")
const cors = require('cors')

//Defining url for local MongoDB
let url = "mongodb://localhost:27017/userLogin";
let client = new MongoClient(url)

//connects to mongodb client and inserts csv data
// mongodb.connect(
//     url,
//     {useNewUrlParser: true, useUnifiedTopology: true},
//     (err, client) => {
//         if(err) console.log(err);
//         client.db("userLogin")
//         .collection("users")
//         .insertMany(csvData, (err, res) => {
//             if (err) console.log(err);
//             console.log(`Inserted: ${res.insertedCount} rows`);
//             client.close()
//         })
//     }
// )


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//cors helps with security
app.use(cors())
app.use('/user', userController)



//finds the collection users in the database and puts them into array
client, function (err, db) {
    db.collection("users", function (err, collection) {
        collection.find({}).toArray(function(err, items){
            console.log(items)
        })
    })
}


//Displaying data from csv
csv().fromFile("./public/logindata.csv")
.then(csvData => {
    console.log(csvData)
})

//Turns csv data into json data by making it an object and pushing it into an array
// let stream = fs.createReadStream("./public/logindata.csv")
// let csvData = [];
// let csvStream = fastcsv
// .parse()
// .on("data", function(data){
//     csvData.push({
//         Id: data[0],
//         Username: data[1],
//         Password: data[2],
//         Name: data[3]
//     })
// })
// .on("end", function() {
//     //remove the first line: header
//     csvData.shift();
//     //save to the MongoDB database collection
// });
// stream.pipe(csvStream)

const loginData = "./public/logindata.csv"



app.listen(3001, () => console.log('Listening on port: 3001'));

mongoose.connect(url, () => {
    console.log('the connection with mongod is established')
  })