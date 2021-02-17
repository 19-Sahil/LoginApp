const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app=express();

app.use(bodyParser.json());

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sahilsql',
    database:'taskdb'
});

connection.connect((err)=>{
    if(!err)
    console.log('Sucessful');
    else
    console.log('Failed :'+JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>console.log('Running'))

app.get('/user',(res,req)=>{
    connection.query('select * from users',(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
});