"use strict";
// registering the app
// first param is the name of the app
// second param is array for projects dependencies 
const app = angular.module('MedRecordApp', ["ngRoute"]);

// is user logged in?
// this is checked as the 'resolve' in most views
// the resolve is an optional map of dependencies if they are resolved successfully,
// they will be injected when the controller is instantiated, and are available to $scope in that controller under $resolve.
// else a $routeChangeError will be fired
// in this case, we need to know if the user is logged in to determine whether to allow access to certain paths

// const isAuth = (welcomeFactory) => welcomeFactory.isAuthenticated();


// using $routeProvider to configure the routes
// the .when specifies the the template, controller, and the resolve (see above)
// to be instantiated when the path is requested
app.config($routeProvider => { 

    // .when is method on routeProvider that takes the current 
    // url (in the browser) as a string and a second param, 
    // which is a object specifying which template to display 
    // and which controller to instantiate
    $routeProvider
        .when('/', {
            templateUrl: 'partials/userWelcome/welcome.html',
            controller: '',
            resolve: {isAuth}
        })
        .when('/newUser', {
            templateUrl: 'partials/userWelcome/newUser.html',
            controller: ''
        })
        .when('/profile', {
            templateUrl: 'partials/userWelcome/profile.html',
            controller: ''
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: ''
        })
        .when('/searchRecords', {
            templateUrl: 'partials/searchRecords.html',
            controller: ''
        })
        .when('/recordFamilyHistory', {
            templateUrl: 'partials/record/recordFamilyHistory.html',
            controller: ''
        })
        .when('/recordMajorIllness', {
            templateUrl: 'partials/record/recordMajorIllness.html',
            controller: ''
        })
        .when('/recordMedications', {
            templateUrl: 'partials/record/recordMedications.html',
            controller: ''
        })
        .when('/recordPatientInfo', {
            templateUrl: 'partials/record/recordPatientInfo.html',
            controller: ''
        })
        .when('/recordSurgicalProcedures', {
            templateUrl: 'partials/record/recordSurgicalProcedures.html',
            controller: ''
        })
        .when('/recordVaccinations', {
            templateUrl: 'partials/record/recordVaccinations.html',
            controller: ''
        })
        .when('/newRecordFamilyHistory', {
            templateUrl: 'partials/recordNew/newRecordFamilyHistory.html',
            controller: ''
        })
        .when('/newRecordMajorIllness', {
            templateUrl: 'partials/recordNew/newRecordMajorIllness.html',
            controller: ''
        })
        .when('/newRecordMedications', {
            templateUrl: 'partials/recordNew/newRecordMedications.html',
            controller: ''
        })
        .when('/newRecordPatientInfo', {
            templateUrl: 'partials/recordNew/newRecordPatientInfo.html',
            controller: ''
        })
        .when('/newRecordSurgicalProcedures', {
            templateUrl: 'partials/recordNew/newRecordSurgicalProcedures.html',
            controller: ''
        })
        .when('/newRecordVaccinations', {
            templateUrl: 'partials/recordNew/newRecordVaccinations.html',
            controller: ''
        })
        // })
        // .when('/logout', {
        //     templateUrl: 'partials/welcomePage.html',
        //     controller: 'welcomeCtrl',
        //     resolve: {isAuth}
    
        // })
        // whenever the URL does not correspond to any of 
        // these pre-configured paths default to the home page.
        .otherwise('/');

});

// .run blocks - A run block is the code which needs to run to kickstart the application. 
// It is executed after all of the service have been configured and the injector has been created
// here we are just initializing our app with firebase, passing 'FRCreds', a constant registered in app/fb-creds.js
// which contains the databaseURL, apiKey, and authDomain need to interact with the app

// app.run(($location, FBCreds)=> firebase.initializeApp(FBCreds));

// binding this value to rootscope is not necessary
// but we are just taking this opportunity to illustrate the fact that you can.
app.run(($rootScope)=> $rootScope.showSearch = false);