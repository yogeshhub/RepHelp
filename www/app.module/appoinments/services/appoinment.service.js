angular.module('medical')
	.factory('AppoinmentService',Appoinment) 
	Appoinment.$inject = ['$http', '$cordovaSQLite'];

	function Appoinment($http, $cordovaSQLite){

		return {
			get: function () {
				var query = 'SELECT * from Doctor';
				return $cordovaSQLite.execute(db, query)
					.then(function(res){											
						return res.rows;
					}, function(err){
						return err;
					})
			},
			set: function ( obj ) {
				var query = 'INSERT INTO Doctor (doctorName, address, date, time, notes) VALUES (?,?,?,?,?)';
				$cordovaSQLite.execute(db, query, [obj.doctorName, obj.address, obj.date, obj.time, obj.notes])
					.then(function(res){
						console.log(res);
					}, function(err){
						console.log(err);
					});				
			}
		}
	}