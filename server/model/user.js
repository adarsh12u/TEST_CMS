const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    authorization : {type : Boolean, default : false}
})

module.exports = mongoose.model('User', userSchema);