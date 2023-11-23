const express = require('express');

const app = express();

const {teacherRouter} = require('./routes/teachers');
const logTimeRequest = require('./middlewares/logTimeRequest');
const port = 3001;

app.use(express.json());
app.use(logTimeRequest);
app.use('/teachers',teacherRouter);

app.listen(port, () => {
    console.log(`This is port : ${port}`);
});

