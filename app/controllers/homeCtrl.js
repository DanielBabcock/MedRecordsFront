"use strict";


app.controller("homeCtrl", function($scope, $window, homeFactory){

    const vm = $scope;
    const url = "http://localhost:3000";

    // ******************************************************************
    // ****************SEARCH FOR RECORDS********************************
    // ******************************************************************
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


    // ******************************************************************
    // ****************CREATE NEW RECORDS********************************
    // ******************************************************************


    // newFamRecord()
    vm.newFamRecord = function(){
        homeFactory.newFamilyRecord();
        console.log("newFamRecord in homeCtrl fired: ");
        // $window.location.href = "#!/newRecordFamilyHistory";
    };

    // newIllRecord()
    // vm.newIllRecord = function(){
    //     $window.location.href = "#!/newRecordMajorIllness";
    // };

    // // newMedRecord()
    // vm.newMedRecord = function(){
    //     $window.location.href = "#!/newRecordMedications";
    // };

    // //     newPatInfoRecord()
    // vm.newPatInfoRecord = function(){
    //     $window.location.href = "#!/newRecordPatientInfo";
    // };

    // //     newSurgRecord()
    // vm.newSurgRecord = function(){
    //     $window.location.href = "#!/newRecordSurgicalProcedures";
    // };

    // //     newVaxRecord()
    // vm.newVaxRecord = function(){
    //     $window.location.href = "#!/newRecordVaccinations";
    // };

});

    // ******************************************************************
    // ****************NOTES*********************************************
    // ******************************************************************