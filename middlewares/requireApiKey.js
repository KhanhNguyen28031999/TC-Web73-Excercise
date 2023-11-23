const requireApiKey = (req,res,next) => {
                
    if(!req.query.apiKey){
        res.send("Api key is missing");
        return;
    }else{
        next();
    };
};

module.exports = requireApiKey;