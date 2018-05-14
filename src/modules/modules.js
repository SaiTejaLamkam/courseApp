(function () {
	'use strict';
	require('./home/home.module');
	module.exports = angular.module('prohires.modules', [
		'prohires.module.home',
	]);
})();
