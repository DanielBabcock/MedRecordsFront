"use strict";

// first param is the name of the app
// second param is array for projects dependencies 
const app = angular.module('MedRecordApp', ["ngRoute", "ngCookies"]);


app.config($routeProvider => { 


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
        .when('/recordReadUpdateFamilyHistory', {
            templateUrl: 'partials/recordReadUpdate/recordReadUpdateFamilyHistory.html',
            controller: 'recordReadUpdateFamilyHistory'
        })
        .when('/recordReadDeleteFamilyHistory', {
            templateUrl: 'partials/recordReadUpdate/recordReadDeleteFamilyHistory.html',
            controller: 'recordReadDeleteFamilyHistory'
        })
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
        .when('/recordReadUpdateDelete', {
            templateUrl: 'partials/recordReadUpdateDelete.html',
            controller: 'recordReadUpdateDeleteCtrl'
        })
        // })
        .when('/logout', {
            templateUrl: 'partials/welcomePage.html',
            controller: 'navBarUserCtrl',
        //     resolve: {isAuth}
    
        })
        // whenever the URL does not correspond to any of 
        // these pre-configured paths default to the home page.
        .otherwise('/');

});