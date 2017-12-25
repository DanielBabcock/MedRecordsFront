"use strict";


app.controller("newRecordFamilyHistoryCtrl", function($scope, recordFactory, userFactory, $window, $routeParams, $location, $rootScope){
    
    const vm = $scope;
    const url = "http://localhost:3000";

    // Get and Post
    let recordType = "family_histories";

    // Patch, Delete, and Get a record
    // let recordType = "family_histories/";
    // const recordType = "family_histories/";

    // HOLDS DATA FROM THE FORM:
    vm.record = {};

    // SUBMITS NEW DATA TO DB FROM NEW RECORD FORM
        vm.submitNewRecordFamilyHistory = function(record){
            let tok = userFactory.tokentok();

            console.log("tok in familyCtr; ", tok);
            recordFactory.addRecord(vm.record, recordType, tok);
            
                $window.location.href = "#!/recordUpdateDeleteFamilyHistory";
                // console.log("submitNewRecordFamilyHistory fired at newRecordFamilyHistoryCtrl");
        };

 
});
