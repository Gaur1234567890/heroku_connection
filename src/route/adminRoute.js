const express = require('express');
const { adminLogic } = require('../logics/adminLogic');
const { student_validator } = require('../validator/studentValidator');
const adminRoute = express.Router();

adminRoute.use('/admin',adminLogic)
adminRoute.post('/get_student',student_validator,adminLogic)

module.exports = {adminRoute : adminRoute};