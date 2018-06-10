(function () {
    "use strict";
    var _sasTrainingCtrl = function ($scope,$state) {
        var vm = this;
        
        vm.goBack = function(){
            $state.go('prohires');
        };


        $(document).ready(function() {

            var toggleAffix = function(affixElement, scrollElement, wrapper) {
            console.log(wrapper,"123456");
              var height = affixElement.outerHeight(),
                  top = wrapper.offset().top;
              
              if (scrollElement.scrollTop() >= top){
                  wrapper.height(height);
                  affixElement.addClass("sub-header-affix");
              }
              else {
                  affixElement.removeClass("sub-header-affix");
                  wrapper.height('auto');
              }
                
            };
            
          
            $('[data-toggle="sub-header-affix"]').each(function() {
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
    _sasTrainingCtrl.$inject = ["$scope","$state"];
    module.exports = _sasTrainingCtrl;
})();






