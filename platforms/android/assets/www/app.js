// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'medical' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'medical.services' is found in services.js
// 'medical.controllers' is found in controllers.js
angular.module('medical', ['ionic','ionic-datepicker','ionic-timepicker'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    $rootScope.isEntered = true;
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    document.addEventListener('deviceready', function() {
      window.sqlitePlugin.echoTest(function() {
        console.log('ECHO test OK');
      });
    });
  });
})

.config(function (ionicTimePickerProvider) {
    var timePickerObj = {
      inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
      format: 12,
      step: 15,
      setLabel: 'Set',
      closeLabel: 'Close'
    };
    ionicTimePickerProvider.configTimePicker(timePickerObj);
})

.config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      titleLabel: 'Select a Date',
      setLabel: 'Set',
      todayLabel: 'Today',
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'modal',
      //from: new Date(2012, 8, 1),
      //to: new Date(2018, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: []
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
    url: '/login',
    //abstract: true,
    templateUrl: 'app.module/login/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })

  .state('home', {
    url: '/home',
    //abstract: true,
    templateUrl: 'app.module/home.html'
    //controller: 'LoginCtrl'
  })

  .state('home.createAppoinment', {
    url: '/create-appoinment',
    //abstract: true,
    templateUrl: 'app.module/appoinments/views/create-appoinment.html',
    controller: 'createAppoinmentCtrl',
    controllerAs: 'appointmentCtrl'
  })

  // Each tab has its own nav history stack:

  .state('home.viewAppoinments', {
    url: '/view-appoinments',
    templateUrl: 'app.module/appoinments/views/view-appoinments.html',
    controller: 'ViewAppoitmentCtrl',
    controllerAs: 'viewAppoinment'
  })

  .state('home.editAppoinment', {
      url: '/edit-appoinment',
      templateUrl: 'app.module/appoinments/views/edit-appoinments.html',
      controller: 'EditAppoitmentCtrl',
      controllerAs: 'editAppoinment'
    })
  .state('home.friends', {
      url: '/friends',
      views: {
        'tab-medicines': {
          templateUrl: 'app.module/medicine/views/tab-medicines.html',
          controller: 'medicineCtrl'
        }
      }
    })
    /*.state('home.tab.medicine-detail', {
      url: '/medicines/:medicineId',
      views: {
        'tab-medicines': {
          templateUrl: 'app.module/medicine/views/medicine-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'app.module/account/views/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
