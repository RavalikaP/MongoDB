var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var database = require('./database/database');

User = require('./Models/users');

//Mongoose connection
database.init();

var callback = function(err,data){
	
	if(err)
		console.log(err);
	else
		console.log(data);
		
}

app.get('/api/users',function(req,res){
    User.GetUsers(function(err,users)
    {
        if(err){
            throw err;
        }
        res.json(users);
    });
});

app.get('/api/user',function(req,res){
    User.GetUser({'id':'ravalika'}, 'name',function(err,users)
    {
        if(err){
            throw err;
        }
        res.json(users);
    });
});