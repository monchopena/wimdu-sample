'use strict';

angular.module('app', [])
.controller('MainCtrl', function MainCtrl($scope) {
  $scope.showme=false;
  console.log('Ready!');
});