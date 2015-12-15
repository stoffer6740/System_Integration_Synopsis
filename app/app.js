(function(){
    "use strict";

    angular.module("app", ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state('login', {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: "LoginController as login"
          })

        $stateProvider
          .state('index', {
            url:'/index',
            templateUrl: "templates/index.html"
          });

          $urlRouterProvider.otherwise("/login");
    })

    .controller("AppController", AppController)
    .controller("LoginController", LoginController)
    .controller("CreateController", CreateController);

    function AppController($scope) {
      alert("port: " + port);
    }

    function LoginController($scope) {

    }

    function CreateController($scope) {

    }

    function ReadController($scope) {

    }

    function UpdateController($scope) {

    }

    function DeleteController($scope) {

    }

})();
