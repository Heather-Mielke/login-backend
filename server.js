const express = require("express");
const app = express();
const fs = require("fs");
const http = require("http").createServer(app);
const fastcsv = require("fast-csv")
const parse = require("csv-parser")
const mongoose = require("mongoose")
const multer = require("multer");
const path = require("path");
const csvModel = require("./models/userdata")
const csv = require("csvtojson");
const { MongoClient } = require("mongodb");
const mongodb = require("mongodb").MongoClient;


//Defining url for local MongoDB
let url = "mongodb://localhost:27017/";
let client = new MongoClient(url)
mongodb.connect(
    url,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err, client) => {
        if(err) console.log(err);
        client.db("userLogin")
        .collection("Users")
        .insertMany(csvData, (err, res) => {
            if (err) console.log(err);
            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close()
        })
    }
)


//Establishing connection
// let dbConn;
// mongodb.connect(url, {
//     useUnifiedTopology: true,
// }).then((client) =>{
//     console.log("DB connected!!");
//     dbConn = client.db();
// }).catch(err => {
//     console.log(`DB Connection Error: ${err.message}`)
// })
// const userController = require('./controllers/userController');

//grabs data from csv file
// fileSystem.createReadStream('public/logindata.csv')
// //parses the data to be grabbed
// .pipe(parse())
// .on('data', function(data){
//     // console.log(data.Id)
//     // console.log(data.Name)
//     // console.log(data.Username)
//     // console.log(data.Password)
// });

//Displaying data from csv
csv().fromFile("./public/logindata.csv")
.then(csvData => {
    console.log(csvData)
})

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



app.listen(3000, () => console.log('Listening on port: 3000'));

