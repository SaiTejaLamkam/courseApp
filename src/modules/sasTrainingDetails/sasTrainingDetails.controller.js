(function () {
    "use strict";
    var _sasTrainingCtrl = function ($scope,$state) {
        var vm = this;
        
        vm.goBack = function(){
            $state.go('prohires');
        };

    };
    _sasTrainingCtrl.$inject = ["$scope","$state"];
    module.exports = _sasTrainingCtrl;
})();






