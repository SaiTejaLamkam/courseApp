(function () {
	'use strict';
	require('./home/home.module');
	require('./sasTrainingDetails/sasTrainingDetails.module');
	module.exports = angular.module('prohires.modules', [
		'prohires.module.home',
		'prohires.module.sasTrainingDetails'
	]);
})();
