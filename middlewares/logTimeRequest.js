const logTimeRequest = (req,res,next) => {
    console.log(`Saved log automatically at :`,new Date());
    next();
    }

    module.exports = logTimeRequest;