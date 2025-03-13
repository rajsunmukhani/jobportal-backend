const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    email : {
        type : String,
        unique : true,
        required : true,
        match : [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/ , 'Please fill a valid email address']
    },
    password : { 
        type : String,
        required : true,
        minLength : [6, 'Password Length should contain atleast 6 characters'],
        maxLength : [12, 'Password Length should contain atmost 12 characters']
    }
},{timestamps : true});

const student = mongoose.model('student', studentSchema);

module.exports = student;