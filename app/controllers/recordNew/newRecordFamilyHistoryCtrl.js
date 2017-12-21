"use strict";
/*
    handle data and provide functionality to edit a task
 */

app.controller("newRecordFamilyHistoryCtrl", function($scope, recordFactory, userFactory, $window, $routeParams, $location, $rootScope){
    
    const vm = $scope;
    const url = "http://localhost:3000";

    // Get and Post
    let getPostAll = "family_histories";

    // Patch, Delete, and Get a record
    let patchDeleteGetIndiv = "family_histories/:id";
    // const patchDeleteGetIndiv = "family_histories/";
    vm.record = {};


        vm.submitNewRecordFamilyHistory = function(record){
            let tok = userFactory.tokentok();

            console.log("tok in familyCtr; ", tok);
            recordFactory.addRecord(vm.record, getPostAll, tok);
            
                $window.location.href = "#!/home";
                console.log("submitNewRecordFamilyHistory fired at newRecordFamilyHistoryCtrl");
        };

});
