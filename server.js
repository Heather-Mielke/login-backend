const express = require("express");
const app = express();
const fileSystem = require("fs");
const http = require("http").createServer(app);
const fastcsv = require("fast-csv")
const parse = require("csv-parser")

//grabs data from csv file
fileSystem.createReadStream('public/logindata.csv')
//parses the data to be grabbed
.pipe(parse())
.on('data', function(data){
    // console.log(data.Id)
    // console.log(data.Name)
    // console.log(data.Username)
    // console.log(data.Password)
})