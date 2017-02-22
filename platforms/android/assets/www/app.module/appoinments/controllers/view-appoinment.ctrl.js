angular.module('medical')

.controller('ViewAppoitmentCtrl', function($rootScope, $scope, $state, AppoinmentService) {
	var viewAppoinment = this;
	viewAppoinment.List = AppoinmentService.get();
	alert(JSON.stringify(viewAppoinment.List));
})