(function () {
	'use strict';
	module.exports = [function () {
		var headerController;
		headerController = function ($scope, $rootScope, $state) {
			var vm = this;
			
		};
		headerController.$inject = ['$scope', '$rootScope', '$state'];

		return {
			restrict: 'E',
			replace: true,
			controller: headerController,
			controllerAs: 'vm',
			scope: {},
			bindToController: {
			},
			template: require('./header.html')
		};

	}];
})();
