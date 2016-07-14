'use strict';

var trainingApp = angular.module('trainingApp', []);

trainingApp.controller('MainController', ['$scope', function($scope){
  $scope.colors=['green','red','white','blue','yellow','black'];
  $scope.application = 'today';
}]);
