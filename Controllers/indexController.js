const { catchAsyncError } = require("../Middlewares/catchAsyncErrors");
const students = require("../Models/studentModel");
const ErrorHandler = require("../utils/errorHandler");

exports.homepage = catchAsyncError(async(req,res,next) => {
    res.json({message : 'homepage'});
});

exports.createUser = catchAsyncError(async(req,res,next) => {
    const student = await new students(req.body).save();
    res.status(200).json(student);
});

exports.login = catchAsyncError(async(req,res,next) => {
    const student = await students.findOne({
        email : req.body.email
    }).select('+password')

    if (!student) {
        next(new ErrorHandler('User not Found', 404))
    }

    const isMatch = student.comparePasswords(req.body.password);

    if (!isMatch) {
        return next(new ErrorHandler('Incorrect Credentials!', 500))
    }

    res.json(student);
});

// exports.logout = catchAsyncError(async(req,res,next) => {
    
// });