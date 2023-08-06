const mongoose = require('mongoose')

const model =new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('names',model)