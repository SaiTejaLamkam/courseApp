(function () {
	'use strict';
	module.exports = [function () {
		var subFooterCtrl;
		subFooterCtrl = function ($scope, $rootScope, $state) {
            var vm = this;
            
		};
		subFooterCtrl.$inject = ['$scope', '$rootScope', '$state'];

		return {
			restrict: 'E',
			replace: true,
			controller: subFooterCtrl,
			controllerAs: 'vm',
			scope: {},
			bindToController: {
			},
			template: require('./subFooter.html')
		};

	}];
})();
