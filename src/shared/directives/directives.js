(function() {
    'use strict';

    module.exports = angular.module('prohires.directives', [])
        .directive('prohiresHeader', require('./header/header.js'))
})();