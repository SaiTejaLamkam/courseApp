(function () {
	'use strict';
	require('./firstModule/first.module');
	module.exports = angular.module('prohires.modules', [
		'prohires.module.first',
	]);
})();
