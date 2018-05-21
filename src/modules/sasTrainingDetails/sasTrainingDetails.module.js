(function () {
	'use strict';

	module.exports = angular.module('prohires.module.sasTrainingDetails', [])
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider.state('sasTraining', {
					url: '/sasTraining',
					views: {
						'centerContent@': {
							template: require('./sasTrainingDetails.html'),
							controller: require('./sasTrainingDetails.controller.js'),
							controllerAs: 'vm'
						}
					},
					data: {
						pageTitle: "SAS",
					}
				})
				
		}])
})();
