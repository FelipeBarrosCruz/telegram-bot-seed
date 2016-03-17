'use strict';

function Core(data) {
    let AppName          = data.name,
        AppConfiguration = data.configuration,
        AppTasks         = require('./tasks')(AppConfiguration);

    let Async = require('async');

    function Listen(Tasks, cb) {
        let AsyncTasks = [(doNext) => {
            return doNext(null, true, null);
        }];

        if (!Array.isArray(Tasks) || !Tasks.length) {
            return cb(null, this);
        }

        for(let i = 0; i < Tasks.length; i++) {
            let Task = Tasks[i];

            AsyncTasks.push((err, result, doNext) => {
                AppTasks.register(Task, (err, status, result) => {
                    return doNext(err, status, result);
                });
            });
        }

        Async.waterfall(AsyncTasks, (err, result) => {
            return cb(null, this);
        });
    }

    return {
        listen: Listen
    };
};

module.exports = Core;