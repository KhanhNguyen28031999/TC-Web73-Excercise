const express = require('express');

const DATA = require('../mock/teachers');

const teacherRouter = express.Router();

            const logTimeRequest = (req,res,next) => {
            console.log(`Saved log automatically at :`,new Date());
            next();
            }
            
            const requireApiKey = (req,res,next) => {
                
                if(!req.query.apiKey){
                    res.send("Api key is missing");
                    return;
                }else{
                    next();
                };
            };
            teacherRouter.use(logTimeRequest, requireApiKey)

            teacherRouter.get('/',(req,res) => {
            const {from,to} = req.query;
            if (from && to) {
                const newTeachers = DATA.Teachers.filter((teacher) => teacher.age >= from && teacher.age <= to);
            res.json(newTeachers)    
            }else {
                res.json(DATA);
            };
        });

            teacherRouter.get('/:id', (req,res) => {
            const teacher = DATA.Teachers.find(teacher => teacher.id === parseInt(req.params.id));
            res.json(teacher);
});



//Array method : find : Tìm đối tượng teacher có id tương ứng
//6 : Querry API : Khi truy cập địa chỉ ... from 18 ... to 40 ... 
//sử dụng array method : filter

module.exports = {teacherRouter};

