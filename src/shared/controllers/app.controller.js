(function () {
	'use strict';
	var _appCtrl = function ($rootScope, $scope, $state) {
		
		$scope.moduleRoute = function(){
			$state.go("firstRoute");
		}

	};
	_appCtrl.$inject = ['$rootScope', '$scope', '$state'];
	module.exports = _appCtrl;
})();
