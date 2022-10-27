const express = require('express');
const mysql = require('mysql');
const path = require('path');
const PORT = 4000;

const app = express();
// console.log(path.join(__dirname,'./public'));
const frontendPath = path.join(__dirname,'./public');
app.use(express.static(frontendPath));

app.use(express.urlencoded({extended : false}))
app.use(express.json());
app.set('view engine','hbs')

const db = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'',
    database:'amreen'
});

db.connect((err)=>{
    if(err){ 
        throw err;
    }
    console.log('MYSQL CONNECTED..');
});
app.use('/api',require('./routes/routes'))
app.get("/",(req,res)=>{
    // res.send("WORKING GIRL");
    res.render("index");
});


app.listen(PORT,()=>{
    console.log(`Working on ${PORT}`);
});