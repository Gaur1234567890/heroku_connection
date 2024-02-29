const { validationResult } = require('express-validator');
const {student} = require('../model/student');
let adminLogic = (req,res)=>{
    let errors = validationResult(req);
        if(errors.isEmpty()){
    const student1 = new student({
        name : req.body.name,
         surname : req.body.surname ,
          MobileNo: req.body.MobileNo,
          email: req.body.email,
           Hobbies:req.body.Hobbies
    })
    console.log(req.body);
    student1.save().
    then(d=>{
        res.status(200).json({msg:'data successfully saved in mongo db'})})
    .catch(e=>{console.log('not save data in mongodb')})
        }
        else{
            console.log('required field is empty');
        }
}
exports.adminLogic = adminLogic;
