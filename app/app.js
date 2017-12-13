"use strict";
// registering the app
// first param is the name of the app
// second param is array for projects dependencies 
const app = angular.module('MedRecordApp', ["ngRoute"]);

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
            templateUrl: 'partials/welcome.html',
            controller: 'welcomeCtrl',
            // resolve: {isAuth}
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        // .when('/profile', {
        //     templateUrl: 'partials/userWelcome/profile.html',
        //     controller: 'profileCtrl'
        // })
        // .when('/searchRecords', {
        //     templateUrl: 'partials/searchRecords.html',
        //     controller: 'searchRecordsCtrl'
        // })
        // .when('/recordFamilyHistory', {
        //     templateUrl: 'partials/record/recordFamilyHistory.html',
        //     controller: 'recordFamilyHistoryCtrl'
        // })
        // .when('/recordMajorIllness', {
        //     templateUrl: 'partials/record/recordMajorIllness.html',
        //     controller: 'recordMajorIllnessCtrl'
        // })
        // .when('/recordMedications', {
        //     templateUrl: 'partials/record/recordMedications.html',
        //     controller: 'recordMedicationsCtrl'
        // })
        // .when('/recordPatientInfo', {
        //     templateUrl: 'partials/record/recordPatientInfo.html',
        //     controller: 'recordPatientInfoCtrl'
        // })
        // .when('/recordSurgicalProcedures', {
        //     templateUrl: 'partials/record/recordSurgicalProcedures.html',
        //     controller: 'recordSurgicalProceduresCtrl'
        // })
        // .when('/recordVaccinations', {
        //     templateUrl: 'partials/record/recordVaccinations.html',
        //     controller: 'recordVaccinationsCtrl'
        // })
        // .when('/newRecordFamilyHistory', {
        //     templateUrl: 'partials/recordNew/newRecordFamilyHistory.html',
        //     controller: 'newRecordFamilyHistoryCtrl'
        // })
        // .when('/newRecordMajorIllness', {
        //     templateUrl: 'partials/recordNew/newRecordMajorIllness.html',
        //     controller: 'newRecordMajorIllnessCtrl'
        // })
        // .when('/newRecordMedications', {
        //     templateUrl: 'partials/recordNew/newRecordMedications.html',
        //     controller: 'newRecordMedicationsCtrl'
        // })
        // .when('/newRecordPatientInfo', {
        //     templateUrl: 'partials/recordNew/newRecordPatientInfo.html',
        //     controller: 'newRecordPatientInfoCtrl'
        // })
        // .when('/newRecordSurgicalProcedures', {
        //     templateUrl: 'partials/recordNew/newRecordSurgicalProcedures.html',
        //     controller: 'newRecordSurgicalProceduresCtrl'
        // })
        // .when('/newRecordVaccinations', {
        //     templateUrl: 'partials/recordNew/newRecordVaccinations.html',
        //     controller: 'newRecordVaccinationsCtrl'
        // })
        // })
        // .when('/logout', {
        //     templateUrl: 'partials/welcomePage.html',
        //     controller: 'navBarCtrl',
        //     resolve: {isAuth}
    
        // })
        // whenever the URL does not correspond to any of 
        // these pre-configured paths default to the home page.
        .otherwise('/');

});

