var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incomeSchema = mongoose.Schema({
    id: {type:Schema.Types.ObjectId,ref:'users',required:true},
    month: {type: String,require: true },
    year: {type: number, default: "123456"},
    sourceIncome: {type: String, require: true},
    amount: {type: number, default: "123456"},
    bank: {type: String, require: true}
});

var Income = module.exports = mongoose.model('income',incomeSchema,'income');

Income.GetIncomeDetails = function( query,feilds,callback){
    Income.findOne(query,callback);
};

Income.AddIncomeDetails = function(callback){
    var newRecord = Income({
        id: "ravalika",
        month: "Jan",
        year: "2017",
        sourceIncome: "Fund",
        amount: "25000",
        bank: "Standard Chatered"
    });
    newRecord.save(callback);
}