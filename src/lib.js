const fs = require('fs');
const path = require('path');


const save = skiTerms => {

    fs.writeFile(
        path.join(__dirname,"..","data",'./skiTerms.json'),
        JSON.stringify(skiTerms,null,2),
        err => {
            if(err) throw err;
        }
    )

}

const logger = (req,res,next) => {

    console.log(`${req.method} to ${req.url}`)

    if(Object.keys(req.body)) console.log(req.body);

    next();

}

module.exports = { save, logger }