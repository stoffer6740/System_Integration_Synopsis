(function(){
    "use strict";

    angular.module("app", [])
    .controller("AppController", AppController)
    .controller("CreateController", CreateController);

    AppController.$inject('$scope');
    CreateController.$inject('$scope');

    function AppController($scope) {

    }

    function CreateController($scope) {

    }
})();
