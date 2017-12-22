"use strict";


app.controller("homeCtrl", function($scope, $window, homeFactory, recordFactory, userFactory){

    const vm = $scope;
    const url = "http://localhost:3000";

// This Ctrl is only for redirecting to other partials.....

    // ******************************************************************
    // ****************SEARCH FOR RECORDS********************************
    // ********STRETCH GOAL is drop menu, for now just link buttons******
    // ******************************************************************
    // searchRecs
    // vm.searchRecs = function(){
    //     $window.location.href = "#!/";
    // };
    vm.famHistRecord = function(){
        // let tok = userFactory.tokentok();  
        // // Get and Post
        // let getPostAll = "family_histories";
       
        // recordFactory.getIndivRecord(getPostAll, tok)
        // .then(data => {
        //     console.log("data: ", data);
        // vm.records = data;
        // });

        // console.log("famHistRecord in homeCtrl fired: ");
        $window.location.href = "#!/recordUpdateDeleteFamilyHistory";
    
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