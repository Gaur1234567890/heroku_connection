const env = require('dotenv');
const mongoose  = require('mongoose');
env.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxwdwkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(d=>{console.log('connected to database')}).catch('error to connect database')

exports.mongoose = mongoose;