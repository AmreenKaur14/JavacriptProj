const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'',
    database:'amreen'
});

router.post('/myform',(req,res)=>{
    console.log(req.body.firstName);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    
    // const sql = 'INSERT INTO formDetails VALUES ?,?,?,?,?,?,?,?,?,?,?'
    // db.query(sql,[],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.send(err);
    //     }
    //     if(result){
    //         console.log('----RESULT---- ',result)
    //         res.send(result);
    //     }
    // });
    res.send('Form submitted')
});

module.exports = router;