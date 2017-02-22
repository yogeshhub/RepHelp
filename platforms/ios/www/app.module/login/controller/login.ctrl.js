angular.module('medical')

.controller('LoginCtrl', function($rootScope, $scope, $state) {
	var login = this;
	login.allow = function () {
		$state.go('home.createAppoinment');
	}
})