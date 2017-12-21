"use strict";
// // functions that on delete or edit  calls factory to to perform that action

app.controller("recordReadDeleteCtrl", function($scope, recordFactory, userFactory, filterFactory, $window, $routeParams, $location){

    const vm = $scope;
    const url = "http://localhost:3000";
    vm.searchText = filterFactory;

    // initialize an array, bound to scope
    // vm.Records = [];

    
//     // ************HOLDS DATA FROM THE FORM:************
    vm.record = {};

//     // Get and Post
//     let getPostAll = "family_histories";
//     // Patch, Delete, and Get a record
//     let patchDeleteGetIndiv = "family_histories/:id";
//     // const patchDeleteGetIndiv = "family_histories/";

// // ************functions to view each type of record and each needs to pass token, record, ************************
const showAllRecords = function(){
    let user = userFactory.getCurrentUser();
    recordFactory.getAllRecords(user)
        .then(Records => vm.Records = Records);
};


// called from list.html gets the itemId from $routeParams
// and passes this to the factory, where an $http.delete removes is from the database
vm.deleteRecord = function(id){
    recordFactory.deleteRecord(id)
        .then(()=>showAllRecords());
};


// called by and ng-change on a checkbox in list.html
// updates the isComplete property in the database and re-renders the records
// because it's ng-model, the checkbox gets the value 'true' when checked,
// we put this in an object and pass it to a factory method,
// which uses $http.patch to update that particular value on this object

vm.toggleDoneRecord = function(thingy){
    recordFactory.editRecord(thingy.id, {isCompleted:thingy.isCompleted})
        .then(()=>showAllRecords());
};

// when the controller is instantiated,
// go ahead and show all Records for the current user
showAllRecords();




});

// // ************END OF FUNCTIONS HERE ************************


// // ************NOTES BELOW HERE************************

//     vm.delRecord = function(record){
//         let tok = userFactory.tokentok();
//         let patchDeleteGetIndiv = "family_histories/:id";
//         // console.log("tok in familyCtr; ", tok);
//         recordFactory.deleteRecord(vm.record, patchDeleteGetIndiv, tok);
        
//             $window.location.href = "#!/recordUpdateDelete";
//             // console.log("submitNewRecordFamilyHistory fired at newRecordFamilyHistoryCtrl");
//     };


// // ### HTTP request routes. ```rails routes```
// // Prefix Verb   URI Pattern                        Controller#Action
// //    family_histories GET    /family_histories(.:format)        family_histories#index
// //                     POST   /family_histories(.:format)        family_histories#create
// //      family_history GET    /family_histories/:id(.:format)    family_histories#show
// //                     PATCH  /family_histories/:id(.:format)    family_histories#update
// //                     PUT    /family_histories/:id(.:format)    family_histories#update
// //                     DELETE /family_histories/:id(.:format)    family_histories#destroy
// // surgical_procedures GET    /surgical_procedures(.:format)     surgical_procedures#index
// //                     POST   /surgical_procedures(.:format)     surgical_procedures#create
// //  surgical_procedure GET    /surgical_procedures/:id(.:format) surgical_procedures#show
// //                     PATCH  /surgical_procedures/:id(.:format) surgical_procedures#update
// //                     PUT    /surgical_procedures/:id(.:format) surgical_procedures#update
// //                     DELETE /surgical_procedures/:id(.:format) surgical_procedures#destroy
// //     major_illnesses GET    /major_illnesses(.:format)         major_illnesses#index
// //                     POST   /major_illnesses(.:format)         major_illnesses#create
// //       major_illness GET    /major_illnesses/:id(.:format)     major_illnesses#show
// //                     PATCH  /major_illnesses/:id(.:format)     major_illnesses#update
// //                     PUT    /major_illnesses/:id(.:format)     major_illnesses#update
// //                     DELETE /major_illnesses/:id(.:format)     major_illnesses#destroy
// //         medications GET    /medications(.:format)             medications#index
// //                     POST   /medications(.:format)             medications#create
// //          medication GET    /medications/:id(.:format)         medications#show
// //                     PATCH  /medications/:id(.:format)         medications#update
// //                     PUT    /medications/:id(.:format)         medications#update
// //                     DELETE /medications/:id(.:format)         medications#destroy
// //        vaccinations GET    /vaccinations(.:format)            vaccinations#index
// //                     POST   /vaccinations(.:format)            vaccinations#create
// //         vaccination GET    /vaccinations/:id(.:format)        vaccinations#show
// //                     PATCH  /vaccinations/:id(.:format)        vaccinations#update
// //                     PUT    /vaccinations/:id(.:format)        vaccinations#update
// //                     DELETE /vaccinations/:id(.:format)        vaccinations#destroy
// //       patient_infos GET    /patient_infos(.:format)           patient_infos#index
// //                     POST   /patient_infos(.:format)           patient_infos#create
// //        patient_info GET    /patient_infos/:id(.:format)       patient_infos#show
// //                     PATCH  /patient_infos/:id(.:format)       patient_infos#update
// //                     PUT    /patient_infos/:id(.:format)       patient_infos#update
// //                     DELETE /patient_infos/:id(.:format)       patient_infos#destroy
// //               items GET    /items(.:format)                   items#index
// //                     POST   /items(.:format)                   items#create
// //                item GET    /items/:id(.:format)               items#show
// //                     PATCH  /items/:id(.:format)               items#update
// //                     PUT    /items/:id(.:format)               items#update
// //                     DELETE /items/:id(.:format)               items#destroy
// //        authenticate POST   /authenticate(.:format)            authentication#authenticate

