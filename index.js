//controller 
const { ethers } = require("ethers");
let DB = require( "./DB");
let ethConnect = require('./ethConnect');

await ethConnect().then(txList=>DB(txList));

const express = require("express");

const app = express();

app.get('/',(req,res)=>{
res.send("Hello");
});

app.listen(3000,()=>{
console.log("server running at 3000...");
})