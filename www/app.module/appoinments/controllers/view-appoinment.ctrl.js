angular.module('medical')

.controller('ViewAppoitmentCtrl', function($rootScope, $scope, $state, AppoinmentService) {
	var viewAppoinment = this;	
	viewAppoinment.List = [];
	AppoinmentService.get().then(function(res){		
		angular.forEach(res, function(val, key){
			viewAppoinment.List.push(val);			
		})		
	});

  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  
})