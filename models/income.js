var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;
var incomeSchema = mongoose.Schema({
    id: {type:Schema.Types.ObjectId,ref:'users',required:true},
    month: {type: String,require: true },
    year: {type: String, default: "123456"},
    sourceIncome: {type: String, require: true},
    amount: {type: String, default: "123456"},
    bank: {type: String, require: true}
});

var Income = module.exports = mongoose.model('income',incomeSchema,'income');

Income.GetIncomeDetails = function(callback){
    Income.find({id:ObjectId("5a8192472a40ef145424baef")},callback);
};

Income.AddIncomeDetails = function(userid,callback){
    var newRecord = Income({
        id: "5a8192472a40ef145424baef",
        month: "Jan",
        year: "2017",
        sourceIncome: "Salary",
        amount: "2000",
        bank: "SBI"
    });
    newRecord.save(callback);
};