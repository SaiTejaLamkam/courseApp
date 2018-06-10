(function () {
	'use strict';

	module.exports = angular.module('prohires.module.home', [])
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider.state('prohires', {
					url: '/prohires',
					views: {
						'centerContent@': {
							template: require('./home.html'),
							controller: require('./home.controller.js'),
							controllerAs: 'vm'
						}
					},
					data: {
						pageTitle: "home",
					}
				})
				
		}])
		// .component('queryScreen', require('./labQueryScreenComponent/labQueryScreen.controller.js'))
		
})();
