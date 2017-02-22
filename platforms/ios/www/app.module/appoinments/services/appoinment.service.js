angular.module('medical')
	.factory('AppoinmentService',Appoinment) 
	Appoinment.$inject = ['$http'];

	function Appoinment($http){
		var AppoinmentList = [];
		return {
			get: function () {
				return AppoinmentList;
			},
			set: function ( obj ) {				
				AppoinmentList.push(obj);			
			}
		}
	}