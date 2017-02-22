var db = null;
angular.module('medical', ['ionic','ionic-datepicker','ionic-timepicker','ngCordova'])

.run(function($ionicPlatform, $rootScope, $cordovaSQLite) {
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
    if (window.cordova) {
          db = $cordovaSQLite.openDB({ name: "RepHelp.db", location: 'default' }); //device
      }else{
        db = window.openDatabase("RepHelp.db", '1', 'RepHelp', 1024 * 1024 * 100); // browser
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS Doctor (id integer primary key AUTOINCREMENT, doctorName text, address text, date Date, time integer, notes text)");
    }   
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

  $stateProvider

    .state('login', {
      url: '/login',    
      templateUrl: 'app.module/login/views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'app.module/home.html'    
    })

    .state('home.createAppoinment', {
      url: '/create-appoinment',
      templateUrl: 'app.module/appoinments/views/create-appoinment.html',
      controller: 'createAppoinmentCtrl',
      controllerAs: 'appointmentCtrl'
    })

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

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
