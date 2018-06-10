(function () {
	'use strict';
	require('./home/home.module');
	require('./sasTrainingDetails/sasTrainingDetails.module');
	require('./aboutUs/aboutUs.module');
	module.exports = angular.module('prohires.modules', [
		'prohires.module.home',
		'prohires.module.sasTrainingDetails',
		'prohires.module.aboutUs'
	]);
})();
