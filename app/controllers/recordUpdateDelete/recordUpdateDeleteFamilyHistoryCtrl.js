"use strict";

app.controller("recordUpdateDeleteFamilyHistoryCtrl", function($scope, recordFactory, userFactory, $window, $routeParams, $location){

    const vm = $scope;
    const url = "http://localhost:3000";
    
    // ************HOLDS DATA FROM THE FORM:************
    vm.record = {};
    // ************HOLDS DATA FROM THE FORM:************

    let recordType = "family_histories";
    let recordID = vm.record.id;

    const gRecord = function(){
        let tok = userFactory.tokentok();  
        let recordType = "family_histories";
       
        recordFactory.getRecord(recordType, tok)
        .then(data => {
            console.log("data in getRecord: ", data);
        vm.records = data;
       
        console.log("data in recordFactory @ getRecord: ", data);
       
        console.log("record @ gRecord in recordUpdateFamiCtrl: ", vm.records);
        });

        console.log("gRecord in recordUpdateDeleteFamilyHistoryCtrl fired: ");
        // $window.location.href = "#!/recordUpdateDeleteFamilyHistory";
    };

    gRecord();

    vm.edRecord = function(){
        // console.log("editRecord button in recordUpdateDeleteFamilyHistoryCtrl fired: ");
        let tok = userFactory.tokentok();  
        let recordType = "family_histories";

        recordFactory.editRecord(recordType, recordID);
        $window.location.href = "#!/recordUpdateDeleteFamilyHistory";
    };

    vm.delRecord = function(){
        // let tok = userFactory.tokentok();  
        let recordType = "family_histories";
        // let id = ;

        // console.log("deleteRecord button in recordUpdateDeleteFamilyHistoryCtrl fired: ");
        recordFactory.deleteRecord(recordType, recordID);
        $window.location.href = "#!/recordUpdateDeleteFamilyHistory";
    };
});

    // display the details of a given task in form.html
    // invoke from details view when the 'edit' button is clicked

    // const showEditTask = function(){
    //     todoFactory.getSingleTask($routeParams.itemId)
    //         .then(data => {
    //             console.log("data", data);
    //             vm.task = data;
    //             vm.task.id = $routeParams.itemId;
    //         });
    // };

    // edit task
    // using location to redirect
    // vm.submitTask = function(){
    //     todoFactory.editTask($routeParams.itemId, vm.task)
    //         .then(data => $location.path('/task-list'));
    // };

    // showEditTask();
    // vm.searchText = filterFactory;

    // // initialize an array, bound to scope
    // vm.tasks = [];

    // // get all tasks from firebase, using the factory
    // // and bind the returned array to scope (vm)
    // const showAllTasks = function(){
    //     let user = userFactory.getCurrentUser();
    //     todoFactory.getAllTasks(user)
    //         .then(tasks => vm.tasks = tasks);
    // };


    // // called from list.html gets the itemId from $routeParams
    // // and passes this to the factory, where an $http.delete removes is from the database
    // vm.deleteTask = function(id){
    //     todoFactory.deleteTask(id)
    //         .then(()=>showAllTasks());
    // };


    // // called by and ng-change on a checkbox in list.html
    // // updates the isComplete property in the database and re-renders the todos
    // // because it's ng-model, the checkbox gets the value 'true' when checked,
    // // we put this in an object and pass it to a factory method,
    // // which uses $http.patch to update that particular value on this object
    
    // vm.toggleDoneTask = function(thingy){
    //     todoFactory.editTask(thingy.id, {isCompleted:thingy.isCompleted})
    //         .then(()=>showAllTasks());
    // };

    // // when the controller is instantiated,
    // // go ahead and show all tasks for the current user
    // showAllTasks();



// ************functions to view each type of record and each needs to pass token, record, ************************






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

