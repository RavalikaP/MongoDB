var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database = require('./database/database');

User = require('./Models/users');
Income = require('./Models/income');
//Mongoose connection
database.init();

app.get('/api/user',function(req,res){
    User.GetUser({'id':'ravalika'}, 'name',function(err,users)
    {
        if(err){
            throw err;
        }
        res.json(users);
    });
});

app.get('/api/addUser',function(req,res){
    User.AddUser({name:'Ravalika',id:'ravalika',password:'1232423','email':'rava@hms.com'},
    function(err,user)
    {
        if(err){
            res.json(err);
        }else{
            res.json(users);
        }
    });
});


app.get('/api/addIncome',function(req,res){
    Income.AddIncomeDetails(
    function(err,income)
    {
        if(err){
            res.json(err);
        }else{
            res.json(income);
        }
    });
});

app.listen(3000);
console.log('running');
