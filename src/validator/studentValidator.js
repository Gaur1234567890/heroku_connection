const {check} = require('express-validator');

let student_validator = [
    check('name','name is required').notEmpty(),

    check('email','email is required').notEmpty()
]

exports.student_validator = student_validator;