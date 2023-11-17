const fs = require('fs')

const CreateNewFile = (fileName, content) => {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File Written Completed")
    });
};

module.exports = {CreateNewFile};