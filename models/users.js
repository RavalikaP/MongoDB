var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: {type: String, require: true ,unique: true},
    name: {type: String,require: true },
    password: {type: String, default: "123456"},
    email: {type: String, require: true}
});

var User = module.exports = mongoose.model('user',userSchema,'users');

User.GetUser = function( query,feilds,callback){
    User.findOne(query,feilds,callback);
};

User.AddUser = function(user, callback){
    var newUser = User({
        name:user.name,
        id:user.id,
        password:user.password,
        email:user.email
    });
    newUser.save(callback);
}