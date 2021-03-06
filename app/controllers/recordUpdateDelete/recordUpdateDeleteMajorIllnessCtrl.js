"use strict";

app.controller("recordUpdateDeleteMajorIllnessCtrl", function($scope, recordFactory, userFactory, $window, $routeParams, $location){

    const vm = $scope;
    const url = "http://localhost:3000";
    
    // ************HOLDS DATA FROM THE FORM:************
    vm.record = {};
    // ************HOLDS DATA FROM THE FORM:************

    let recordType = "major_illnesses";
    let recordID = vm.record.id;

    const gRecord = function(){
        let recordType = "major_illnesses";
        
        let tok = userFactory.tokentok();  
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
            console.log("data in getRecord: ", data);
        vm.records = data;
       
        });

        // $window.location.href = "#!/recordUpdateDeleteMajorIllness";
    };

    gRecord();

    vm.edRecord = function(recordId, record){
        let recordType = "major_illnesses";
        let tok = userFactory.tokentok(); 
        let recordID = recordId;
        let patchKey = record;

        console.log("recordType in edRecord in ctrl: ", recordType);
        console.log("recordID in edRecord in ctrl: ", recordID);
        console.log("tok in edRecord in ctrl: ", tok);
        console.log("record in edRecord in ctrl: ", record);

        recordFactory.editRecord(recordType, recordID, tok, patchKey);
        // $window.location.href = "#!/recordUpdateDeleteMajorIllness";
        $window.location.href = "#!/home";

    };

    vm.delRecord = function(recordId){
        let tok = userFactory.tokentok();  
        let recordType = "major_illnesses";
        let recordID = recordId;


        console.log("recordID: ", recordID);
        recordFactory.deleteRecord(recordType, recordID, tok);
        $window.location.href = "#!/home";
        // $window.location.href = "#!/recordUpdateDeleteMajorIllness";
    };

});


// ************END OF FUNCTIONS HERE ************************


// ************NOTES BELOW HERE************************


// ### HTTP request routes. ```rails routes```
// Prefix Verb   URI Pattern                        Controller#Action
//    family_histories GET    /family_histories(.:format)        family_histories#index
//                     POST   /family_histories(.:format)        family_histories#create
//      family_history GET    /family_histories/:id(.:format)    family_histories#show
//                     PATCH  /family_histories/:id(.:format)    family_histories#update
//                     PUT    /family_histories/:id(.:format)    family_histories#update
//                     DELETE /family_histories/:id(.:format)    family_histories#destroy
// surgical_procedures GET    /surgical_procedures(.:format)     surgical_procedures#index
//                     POST   /surgical_procedures(.:format)     surgical_procedures#create
//  surgical_procedure GET    /surgical_procedures/:id(.:format) surgical_procedures#show
//                     PATCH  /surgical_procedures/:id(.:format) surgical_procedures#update
//                     PUT    /surgical_procedures/:id(.:format) surgical_procedures#update
//                     DELETE /surgical_procedures/:id(.:format) surgical_procedures#destroy
//     major_illnesses GET    /major_illnesses(.:format)         major_illnesses#index
//                     POST   /major_illnesses(.:format)         major_illnesses#create
//       major_illness GET    /major_illnesses/:id(.:format)     major_illnesses#show
//                     PATCH  /major_illnesses/:id(.:format)     major_illnesses#update
//                     PUT    /major_illnesses/:id(.:format)     major_illnesses#update
//                     DELETE /major_illnesses/:id(.:format)     major_illnesses#destroy
//         medications GET    /medications(.:format)             medications#index
//                     POST   /medications(.:format)             medications#create
//          medication GET    /medications/:id(.:format)         medications#show
//                     PATCH  /medications/:id(.:format)         medications#update
//                     PUT    /medications/:id(.:format)         medications#update
//                     DELETE /medications/:id(.:format)         medications#destroy
//        vaccinations GET    /vaccinations(.:format)            vaccinations#index
//                     POST   /vaccinations(.:format)            vaccinations#create
//         vaccination GET    /vaccinations/:id(.:format)        vaccinations#show
//                     PATCH  /vaccinations/:id(.:format)        vaccinations#update
//                     PUT    /vaccinations/:id(.:format)        vaccinations#update
//                     DELETE /vaccinations/:id(.:format)        vaccinations#destroy
//       patient_infos GET    /patient_infos(.:format)           patient_infos#index
//                     POST   /patient_infos(.:format)           patient_infos#create
//        patient_info GET    /patient_infos/:id(.:format)       patient_infos#show
//                     PATCH  /patient_infos/:id(.:format)       patient_infos#update
//                     PUT    /patient_infos/:id(.:format)       patient_infos#update
//                     DELETE /patient_infos/:id(.:format)       patient_infos#destroy
//               items GET    /items(.:format)                   items#index
//                     POST   /items(.:format)                   items#create
//                item GET    /items/:id(.:format)               items#show
//                     PATCH  /items/:id(.:format)               items#update
//                     PUT    /items/:id(.:format)               items#update
//                     DELETE /items/:id(.:format)               items#destroy
//        authenticate POST   /authenticate(.:format)            authentication#authenticate