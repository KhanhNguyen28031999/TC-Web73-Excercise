const express = require('express');

const DATA = require('../mock/teachers');

const teacherRouter = express.Router();

teacherRouter.get('/', (req,res) => {
    res.json(DATA);
});

module.exports = {teacherRouter};