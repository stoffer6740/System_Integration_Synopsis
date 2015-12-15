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
            .state('signup', {
              url: "/signup",
              templateUrl: "templates/signup.html",
              controller: "SignUpController as signup"
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
    .controller("SignUpController", SignUpController);

    function AppController($scope) {
      var app = this;
      alert("port: " + port);
    }

    function LoginController($scope) {
      var login = this;
    }

    function SignUpController($scope) {
      var signup = this;

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
