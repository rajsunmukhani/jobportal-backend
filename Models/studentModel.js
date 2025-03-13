const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        maxLength : [12, 'Password Length should contain atmost 12 characters'],
        select : false
    }
},{timestamps : true});

studentSchema.pre('save', function() {
    if (!this.isModified('password')) {
        return;
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

studentSchema.methods.comparePasswords = function(password){
    return bcrypt.compareSync(password, this.password);
}

const student = mongoose.model('student', studentSchema);

module.exports = student;