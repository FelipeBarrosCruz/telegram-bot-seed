'use strict';

const Logic = (() =>{
    console.log('Loaded plugin two');

    return {
        logic: require('./src/logic'),
        brain: require('./src/brain')
    };
})();

module.exports = Logic;