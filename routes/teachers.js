const express = require('express');

const DATA = require('../mock/teachers');
const logRequestMethod = require('../middlewares/logRequestMethod');
const requireApiKey = require('../middlewares/requireApiKey');

const teacherRouter = express.Router();
 teacherRouter.use('/:id', logRequestMethod);

            
            
            
            // teacherRouter.use(requireApiKey)

    //Get All
            teacherRouter.get('/',(req,res) => {
            const {from,to} = req.query;
            if (from && to) {
                const newTeachers = DATA.Teachers.filter((teacher) => teacher.age >= from && teacher.age <= to);
            res.json(newTeachers)    
            }else {
                res.json(DATA);
            };
        });

    //Get by id
            teacherRouter.get('/:id', (req,res) => {
            const teacher = DATA.Teachers.find(teacher => teacher.id === parseInt(req.params.id));
            res.json(teacher);
});
    // Post : Create new teacher

            teacherRouter.post('/', (req,res) => {

                console.log(req.body)
                const newTeacher = {
                    id : DATA.Teachers.length + 1,
                    ...req.body,
                    
    
                }
                console.log(newTeacher);
                
                DATA.Teachers.push(newTeacher)
                res.json(newTeacher);
            });

    // Put : Edit teacher

            teacherRouter.put('/', (req,res) => {
                const teacherIndex = DATA.Teachers.findIndex(
                    (teacher) => teacher.id == req.params.id
                );
                if(teacherIndex === - 1) {
                    res.send("Not found teacher");
                }
                else
                {
                    const updatedTeacher = { ...DATA[teacherIndex], ...req.body}
                    DATA.Teachers[teacherIndex] = updatedTeacher;
                    res.json(updatedTeacher);
                }
            });

    // Delete : Delete teacher
    teacherRouter.delete('/', (req,res) => {
        const teacherIndex = DATA.Teachers.findIndex(
            (teacher) => teacher.id == req.params.id
        );
        if(teacherIndex === - 1) {
            res.send("Not found teacher");
        }
        else
        {
            DATA.Teachers.splice(teacherIndex, 1);
            res.send("Delete teacher successfully");
    }});



//Array method : find : Tìm đối tượng teacher có id tương ứng
//6 : Querry API : Khi truy cập địa chỉ ... from 18 ... to 40 ... 
//sử dụng array method : filter

module.exports = {teacherRouter};

