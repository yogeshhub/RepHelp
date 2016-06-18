angular.module('medical.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('medicineCtrl', function($scope, medicineService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  // });

  $scope.medicines = medicineService.all();
  $scope.remove = function(medicine) {
    medicineService.remove(medicine);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, medicineService) {
  $scope.medicine = medicineService.get($stateParams.medicineId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
