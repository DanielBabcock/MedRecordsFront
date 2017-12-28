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
        .when('/recordUpdateDeleteFamilyHistory', {
            templateUrl: 'partials/recordUpdateDelete/recordUpdateDeleteFamilyHistory.html',
            controller: 'recordUpdateDeleteFamilyHistoryCtrl'
        })
        .when('/newRecordMedications', {
            templateUrl: 'partials/recordNew/newRecordMedications.html',
            controller: 'newRecordMedicationsCtrl'
        })
        // ****recordUpdateDelete______

        .when('/newRecordPatientInfo', {
            templateUrl: 'partials/recordNew/newRecordPatientInfo.html',
            controller: 'newRecordPatientInfoCtrl'
        })
        // ****recordUpdateDelete______

        .when('/newRecordSurgicalProcedures', {
            templateUrl: 'partials/recordNew/newRecordSurgicalProcedures.html',
            controller: 'newRecordSurgicalProceduresCtrl'
        })
        // ****recordUpdateDelete______

        .when('/newRecordVaccinations', {
            templateUrl: 'partials/recordNew/newRecordVaccinations.html',
            controller: 'newRecordVaccinationsCtrl'
        })
        // ****recordUpdateDelete______

        // 
        .when('/logout', {
            templateUrl: 'partials/welcomePage.html',
            controller: 'navBarUserCtrl',
        //     resolve: {isAuth}
    
        })
        .otherwise('/');
});