/**
 * Created by root on 18/6/16.
 */
angular.module('medical.controllers', [])
  .controller('ChatDetailCtrl', function($scope, $stateParams, medicineService) {
    $scope.medicine = medicineService.get($stateParams.medicineId);
  })
