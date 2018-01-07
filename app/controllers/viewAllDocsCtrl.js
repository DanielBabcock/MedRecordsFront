"use strict";


app.controller("viewAllDocsCtrl", function($scope, recordFactory, userFactory, $window, $routeParams, $location){
    

    const vm = $scope;
    const url = "http://localhost:3000";
    
    // ************HOLDS DATA FROM THE FORM:************
    vm.record = {};
    // ************HOLDS DATA FROM THE FORM:************
       // vax
     
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
   
    // vax
    const getAllVaccinationRecord = function(){
        let tok = userFactory.tokentok();  
        let recordType = "vaccinations";
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
        vm.records = data;
        });
    };
    // getAllVaccinationRecord();
    // surg
    const getAllSurgicalRecord = function(){
        let tok = userFactory.tokentok();  
        let recordType = "surgical_procedures";
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
        vm.records = data;
        });
    };
    // getAllSurgicalRecord();
    // maj ill
    const getAllIllnessRecord = function(){
        let tok = userFactory.tokentok();  
        let recordType = "major_illnesses";
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
        vm.records = data;
        });
    };
    // getAllIllnessRecord();
    // fam
    const getAllFamilyRecord = function(){
        let tok = userFactory.tokentok();  
        let recordType = "family_histories";
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
        vm.records = data;
        });
    };
    // getAllFamilyRecord();
        // pat info
    const getAllPatientRecord = function(){
        let tok = userFactory.tokentok();  
        let recordType = "patient_infos";
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
        vm.records = data;
        });
    };
    // getAllPatientRecord();
    // meds
    const getAllMedicationRecord = function(){
        let tok = userFactory.tokentok();  
        let recordType = "medications";
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
        vm.records = data;
        });
    };

    getAllVaccinationRecord();
    getAllSurgicalRecord();
    getAllIllnessRecord();
    getAllFamilyRecord();
    getAllPatientRecord();
    getAllMedicationRecord();

    // ***************************************************************
    // ************BUTTONS BELOW HERE*********************************
    // ***************************************************************

});