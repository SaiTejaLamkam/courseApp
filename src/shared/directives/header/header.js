(function () {
	'use strict';
	module.exports = [function () {
		var headerController;
		headerController = function ($scope, $rootScope, $state) {
            var vm = this;
            $(".dropdown").hover(            
                function() {
                    $('.multi-level', this).stop( true, true ).fadeIn("fast");
                    $(this).toggleClass('open');
                    // $('b', this).toggleClass("caret caret-up");                
                },
                function() {
                    $('.multi-level', this).stop( true, true ).fadeOut("fast");
                    $(this).toggleClass('open');
                    // $('b', this).toggleClass("caret caret-up");                
                });
			
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
