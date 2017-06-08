(function() {

  "use strict";

  var App = angular.module("App.controllers", []);

  App.controller("MyCtrl1", ["$scope", function ($scope, UtilSrvc){
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("User");
  }]);

  App.controller("MyCtrl2", ["$scope", function($scope){
      
  }]);

}());