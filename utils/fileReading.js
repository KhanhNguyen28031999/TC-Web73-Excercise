const fs = require('fs')

const FileReading = (fileName,content) => {
    fs.readFile(fileName,"utf8",(err,data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
};

module.exports = {FileReading}