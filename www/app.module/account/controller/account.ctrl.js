/**
 * Created by root on 18/6/16.
 */
angular.module('medical.controllers', [])
  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
