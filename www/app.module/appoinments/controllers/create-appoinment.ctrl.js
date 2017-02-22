angular.module('medical')

.controller('createAppoinmentCtrl', function($scope, $state, ionicDatePicker, ionicTimePicker, AppoinmentService, $cordovaSQLite) {
	var appointmentCtrl = this;
	$scope.newOne = {};
	var selectedDate, selectedTime;
	var DateObj = {
      callback: function (val) {  
      	selectedDate = new Date(val);
      	var month =  selectedDate.getMonth() + 1; // Date starts from '0' in JS
      	appointmentCtrl.date =  selectedDate.getDate() +'/'+ month +'/'+ selectedDate.getFullYear();
      },
      from: new Date(2017, 1, 1), 
      to: new Date(2017, 11, 31), 
      inputDate: new Date(),      
      mondayFirst: true,          
      disableWeekdays: [0],       
      closeOnSelect: true,       
      templateType: 'modal'       
    };

    var Time = {
	    callback: function (val) {      //Mandatory
	      if (typeof (val) === 'undefined') {
	        alert('Time not selected');
	      } else {
	        selectedTime = new Date(val * 1000);	        
	        appointmentCtrl.time = selectedTime.getUTCHours() +' H :'+ selectedTime.getUTCMinutes() +' M';	        
	      }
	    },
	    inputTime: 50400,   
	    format: 12,         
	    step: 15,           
	    setLabel: 'Set'    
  	};

    appointmentCtrl.openDatePicker = function(){
      ionicDatePicker.openDatePicker(DateObj);
    };

    appointmentCtrl.openTimePicker = function(){
      ionicTimePicker.openTimePicker(Time);
    };

    appointmentCtrl.create = function(newOne) {
    	newOne.date = selectedDate;
    	newOne.time = selectedTime;
    	AppoinmentService.set(newOne);    	    
    }

})