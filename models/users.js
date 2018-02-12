var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {type: String, require: true ,unique: true},
    id: {type: String,require: true },
    password: {type: String, default: "123456"},
});

var User = module.exports = mongoose.model('user',userSchema,'users');

User.GetUsers = function(callback){
    User.find(callback);
};

User.GetUser = function( query,feilds,callback){
    User.findOne(query,feilds,callback);
};

User.AddUser = function(user, callback){
    User
}