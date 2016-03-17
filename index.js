'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
    let ApplicationCore = require('./src/core'),
        Configuration = require('./env/${ENV}'.replace('${ENV}', process.env.NODE_ENV));

    const TOKEN         = '68610897:AAHR0RCehEVmeg7jU9le1FtuENNcG62AQ8';
    const NAME          = '@msrobot';

    let Application = new ApplicationCore({
        name:          NAME,
        token:         TOKEN,
        configuration: Configuration
    });

    Application.listen(['plugins'], (AppInstance) => {
        console.log('Works fine');
    });

} catch(err) {
    if (process.env.NODE_ENV !== 'production') {
        throw err;
    }
}