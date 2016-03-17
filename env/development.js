'use strict';

const PLUGINS = [
    'plugin_one',
    'plugin_two'
];

const CONFIGURATION = {
    plugins: {
        dir:  'K:/bot/plugins/${component}/index.js',
        data: PLUGINS
    }
};

module.exports = CONFIGURATION;