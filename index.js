const express = require('express');

const app = express();

const {teacherRouter} = require('./routes/teachers');
const port = 3001;

app.use('/teachers', teacherRouter);

app.listen(port, () => {
    console.log(`This is port : ${port}`);
});

