//This file is not transpiled so must use CommonJS and ES5

//transpile tests via babel before mocka runs it
require('babel-register')();

//Disable webpack features that Mocha doesn't understand.
//for example this: import './index.css';
require.extensions['.css'] = function () {};//Mocha will treat it now as empty function

