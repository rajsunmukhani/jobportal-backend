const { catchAsyncError } = require("../Middlewares/catchAsyncErrors");
const student = require("../Models/studentModel");

exports.homepage = catchAsyncError(async(req,res,next) => {
    res.json({message : 'homepage'});
})

exports.createUser = catchAsyncError(async(req,res,next) => {
    const stud = await new student(req.body).save();
    res.status(200).json(stud);
})