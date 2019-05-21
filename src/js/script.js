window.addEventListener("DOMContentLoaded", () => {
    'use strict';
    let calc = require ('./src/js/calc'),
     form = require('./src/js/form'),
     slider = require('./src/js/slider'),
     tabs = require('./src/js/tabs'),
     timer = require('./src/js/timer'),
     modal = require('./src/js/modal');
     calc();
     form();
     slider();
     tabs();
     timer();
     modal();
});