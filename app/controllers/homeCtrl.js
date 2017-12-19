"use strict";


app.controller("homeCtrl", function($scope, $window, homeFactory, recordNewFactory){

    const vm = $scope;
    const url = "http://localhost:3000";

    // ******************************************************************
    // ****************SEARCH FOR RECORDS********************************
    // ******************STRETCH GOAL************************************
    // searchRecs
    // vm.searchRecs = function(){
    //     $window.location.href = "#!/";
    // };


    // ******************************************************************
    // ****************GO TO PROFILE*************************************
    // ******************************************************************
    // goToProfile
    // vm.goToProfile = function(){
    //     $window.location.href = "#!/profile";
    // };


    // ******************new FamRecord first*****************************
    // ****************CREATE NEW RECORDS********************************
    // ****************STRETCH GOAL**************************************


    // **********newFamRecord()**********


    vm.newFamRecord = function(){
        // recordNewFactory.addRecord();
        console.log("newFamRecord in homeCtrl fired: ");
        $window.location.href = "#!/newRecordFamilyHistory";
    };

    // **********newIllRecord()***********
    // vm.newIllRecord = function(){
    //     $window.location.href = "#!/newRecordMajorIllness";
    // };

    // // **********newMedRecord()**********
    // vm.newMedRecord = function(){
    //     $window.location.href = "#!/newRecordMedications";
    // };

    // //    ********** newPatInfoRecord()**********
    // vm.newPatInfoRecord = function(){
    //     $window.location.href = "#!/newRecordPatientInfo";
    // };

    // //   **********  newSurgRecord()**********
    // vm.newSurgRecord = function(){
    //     $window.location.href = "#!/newRecordSurgicalProcedures";
    // };

    // //   **********  newVaxRecord()**********
    // vm.newVaxRecord = function(){
    //     $window.location.href = "#!/newRecordVaccinations";
    // };

});

    // ******************************************************************
    // ****************NOTES*********************************************
    // ******************************************************************