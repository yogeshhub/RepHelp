/**
 * Created by root on 18/6/16.
 */
angular.module('medical.controllers', [])
  .controller('medicineCtrl', function($scope, medicineService) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    // });
alert("sd");
    $scope.medicines = medicineService.all();
    $scope.remove = function(chat) {
      medicineService.remove(chat);
    };
  })
