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
			






			$(document).ready(function() {

				var toggleAffix = function(affixElement, scrollElement, wrapper) {
				console.log(affixElement,"***");
				  var height = affixElement.outerHeight(),
					  top = wrapper.offset().top;
				  
				  if (scrollElement.scrollTop() >= top){
					  wrapper.height(height);
					  affixElement.addClass("affix");
				  }
				  else {
					  affixElement.removeClass("affix");
					  wrapper.height('auto');
				  }
					
				};
				
			  
				$('[data-toggle="affix"]').each(function() {
				  var ele = $(this),
					  wrapper = $('<div></div>');
				  
				  ele.before(wrapper);
				  $(window).on('scroll resize', function() {
					  toggleAffix(ele, $(this), wrapper);
				  });
				  
				  // init
				  toggleAffix(ele, $(window), wrapper);
				});
				
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
