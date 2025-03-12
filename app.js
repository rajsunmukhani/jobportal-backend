require('dotenv').config('./env');
const express = require('express');
const app = express();
const {generateError} = require('./Middlewares/error')

//logger
const logger = require('morgan');
const ErrorHandler = require('./utils/errorHandler');
app.use(logger('tiny'));



app.use('/', require('./Routers/indexRouter'))

//error-handling

app.all('*',(req,res,next) => {
    next(new ErrorHandler(`Requested URL Not Found`,404));
})
app.use(generateError);


app.listen(process.env.PORT,console.log(`Server is running on port : ${process.env.PORT}`))
