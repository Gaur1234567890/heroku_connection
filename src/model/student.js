const { mongoose } = require('../config/db');


const student = mongoose.model('StudentData',
{
name:String,
surname : String,
MobileNo : Number,
 email: String,
Hobbies : String
})

exports.student = student;