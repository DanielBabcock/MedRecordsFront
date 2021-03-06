"use strict";


app.controller("homeCtrl", function($scope, $window, homeFactory, recordFactory, userFactory){

    const vm = $scope;
    // const url = "http://localhost:3000";

// This Ctrl is only for redirecting to other partials.....

    // ******************************************************************
    // ****************SEARCH FOR RECORDS********************************
    // *****************FOR NOW,,, buttons*******************************
    // ********STRETCH GOAL is drop menu, for now just link buttons******
    // ******************************************************************
    
    // searchRecs
    // vm.searchRecs = function(){
    //     $window.location.href = "#!/";
    // };

        // **********VIEW ALL**********

        vm.viewAll = function(){
            $window.location.href = "#!/viewAllDocs";

        };


        // **********recordUpdateDeleteFamilyHistory()**********

        vm.famHistRecord = function(){
            $window.location.href = "#!/recordUpdateDeleteFamilyHistory";
    };
        // **********recordUpdateDeleteFamilyHistory()**********

        vm.illRecord = function(){
            $window.location.href = "#!/recordUpdateDeleteMajorIllness";
    };
        // **********recordUpdateDeleteFamilyHistory()**********

        vm.medsRecord = function(){
            $window.location.href = "#!/recordUpdateDeleteMedications";
    };
        // **********recordUpdateDeleteFamilyHistory()**********

        vm.patInfoRecord = function(){
            $window.location.href = "#!/recordUpdateDeletePatientInfo";
    };
        // **********recordUpdateDeleteFamilyHistory()**********

        vm.surgRecord = function(){
            $window.location.href = "#!/recordUpdateDeleteSurgicalProcedures";
    };
        // **********recordUpdateDeleteFamilyHistory()**********

        vm.vaxRecord = function(){
            $window.location.href = "#!/recordUpdateDeleteVaccinations";
    };



    
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
        // recordFactory.addRecord();
        // console.log("newFamRecord in homeCtrl fired: ");
        $window.location.href = "#!/newRecordFamilyHistory";
    };
    
    // **********newIllRecord()***********
    vm.newIllRecord = function(){
        $window.location.href = "#!/newRecordMajorIllness";
    };

    // // **********newMedRecord()**********
    vm.newMedRecord = function(){
        $window.location.href = "#!/newRecordMedications";
    };

    // //    ********** newPatInfoRecord()**********
    vm.newPatInfoRecord = function(){
        $window.location.href = "#!/newRecordPatientInfo";
    };

    // //   **********  newSurgRecord()**********
    vm.newSurgRecord = function(){
        $window.location.href = "#!/newRecordSurgicalProcedures";
    };

    // //   **********  newVaxRecord()**********
    vm.newVaxRecord = function(){
        $window.location.href = "#!/newRecordVaccinations";
    };

});

    // ******************************************************************
    // ****************NOTES*********************************************
    // ******************************************************************