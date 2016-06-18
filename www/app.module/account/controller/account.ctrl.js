/**
 * Created by root on 18/6/16.
 */
angular.module('medical.controllers', [])
  .controller('AccountCtrl', function($scope) {
    alert("account");
    $scope.settings = {
      enableFriends: true
    };
  });
