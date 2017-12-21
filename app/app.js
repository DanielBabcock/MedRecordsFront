"use strict";
// registering the app
// first param is the name of the app
// second param is array for projects dependencies 
const app = angular.module('MedRecordApp', ["ngRoute", "ngCookies"]);

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
            controller: 'welcomeCtrl'
            // resolve: {isAuth}
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/newRecordFamilyHistory', {
            templateUrl: 'partials/recordNew/newRecordFamilyHistory.html',
            controller: 'newRecordFamilyHistoryCtrl'
        })
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
        .when('/recordViewCrud', {
            templateUrl: 'partials/recordViewCrud.html',
            controller: 'recordViewCrudCtrl'
        })
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