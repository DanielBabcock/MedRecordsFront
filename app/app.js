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
        .when('/recordUpdateDeleteMedications', {
            templateUrl: 'partials/recordUpdateDelete/recordUpdateDeleteMedications.html',
            controller: 'recordUpdateDeleteMedicationsCtrl' 
        })
        // ****recordUpdateDeletePatientInfo

        .when('/newRecordPatientInfo', {
            templateUrl: 'partials/recordNew/newRecordPatientInfo.html',
            controller: 'newRecordPatientInfoCtrl'
        })
        .when('/recordUpdateDeletePatientInfo', {
            templateUrl: 'partials/recordUpdateDelete/recordUpdateDeletePatientInfo.html',
            controller: 'recordUpdateDeletePatientInfoCtrl'
        })
        // ****recordUpdateDeleteSurgicalProcedures

        .when('/newRecordSurgicalProcedures', {
            templateUrl: 'partials/recordNew/newRecordSurgicalProcedures.html',
            controller: 'newRecordSurgicalProceduresCtrl'
        })
        .when('/recordUpdateDeleteSurgicalProcedures', {
            templateUrl: 'partials/recordUpdateDelete/recordUpdateDeleteSurgicalProcedures.html',
            controller: 'recordUpdateDeleteSurgicalProceduresCtrl'
        })
        .when('/newRecordMajorIllness', {
            templateUrl: 'partials/recordNew/newRecordMajorIllness.html',
            controller: 'newRecordMajorIllnessCtrl'
        })
        .when('/recordUpdateDeleteMajorIllness', {
            templateUrl: 'partials/recordUpdateDelete/recordUpdateDeleteMajorIllness.html',
            controller: 'recordUpdateDeleteMajorIllnessCtrl'
        })
        .when('/newRecordVaccinations', {
            templateUrl: 'partials/recordNew/newRecordVaccinations.html',
            controller: 'newRecordVaccinationsCtrl'
        })
        .when('/recordUpdateDeleteVaccinations', {
            templateUrl: 'partials/recordUpdateDelete/recordUpdateDeleteVaccinations.html',
            controller: 'recordUpdateDeleteVaccinationsCtrl'
        })
        

        // 
        .when('/logout', {
            templateUrl: 'partials/welcomePage.html',
            controller: 'navBarUserCtrl',
        //     resolve: {isAuth}
    
        })
        .otherwise('/');
});