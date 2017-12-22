"use strict";
// functions that on delete or edit  calls factory to to perform that action

app.controller("recordUpdateDeleteFamilyHistoryCtrl", function($scope, recordFactory, userFactory, $window, $routeParams, $location){

    const vm = $scope;
    const url = "http://localhost:3000";
    
    // ************HOLDS DATA FROM THE FORM:************
    vm.record = {};

    // Get and Post
    let getPostAll = "family_histories";
    // Patch, Delete, and Get a record


    const getRecord = function(){
        let tok = userFactory.tokentok();  
        // Get and Post
        let getPostAll = "family_histories";
       
        recordFactory.getIndivRecord(getPostAll, tok)
        .then(data => {
            console.log("data in getRecord: ", data);
        vm.records = data;
        });

        console.log("getRecord in recordUpdateDeleteFamilyHistoryCtrl fired: ");
        // $window.location.href = "#!/recordUpdateDeleteFamilyHistory";

    };

    getRecord();

// ************functions to view each type of record and each needs to pass token, record, ************************
    // display the details of a given task in form.html
    // invoke from details view when the 'edit' button is clicked
//     const showUpdateRec = function(){
//         recordFactory.getIndivRecord($routeParams.itemId)
//             .then(data => {
//                 console.log("data", data);
//                 vm.record = data;
//                 vm.record.id = $routeParams.itemId;
//             });
//     };

//     // edit task
//     // using location to redirect
//     vm.submitRec = function(){
//         recordFactory.editRecord($routeParams.itemId, vm.task)
//             .then(data => $location.path('/record-list'));
//     };

//     showUpdateRec();


});


// ************END OF FUNCTIONS HERE ************************


// ************NOTES BELOW HERE************************
 // vm.upRecord = function(record){
    //     let tok = userFactory.tokentok();
    //     let patchDeleteGetIndiv = "family_histories/:id";
    //     // console.log("tok in familyCtr; ", tok);
    //     recordFactory.updateRecord(vm.record, patchDeleteGetIndiv, tok);
        
    //         $window.location.href = "#!/recordUpdateDelete";
    //         // console.log("submitNewRecordFamilyHistory fired at newRecordFamilyHistoryCtrl");
    // };

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

