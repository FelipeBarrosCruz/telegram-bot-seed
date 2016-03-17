'use strict';

let Tasks = (Configuration) => {

    function Loader(configuration, cb) {
        let Dir  = configuration.dir,
            Data = configuration.data;

        if (!Array.isArray(Data) || !Data.length) {
            return cb(new Error('Loader data is empty'), false, null);
        }

        let Response = [];

        for(let index in Data) {
            let Component = require(Dir.replace('${component}', Data[index]));
            console.log(Component);
            Response.push(Component);
        }

        return cb(null, (Response.length ? true : false), Response);
    }

    let Register = (name, cb) => {
        Loader(Configuration[name], (err, status, result) => {
            return cb(err, status, result);

        });
    };

    return {
        register:   Register
    }
};

module.exports = Tasks;