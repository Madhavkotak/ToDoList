const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Schema for a database item
const Todo = new Schema(
    {
        name : {
            type : String,
            required : true
        }
        ,
        list :{
            type : String,
            required : true
        }
    }
)
module.exports =  mongoose.model('Todo', Todo);