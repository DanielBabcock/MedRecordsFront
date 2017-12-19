"use strict";
/*
    handle data and provide functionality to edit a task
 */

app.controller("newRecordFamilyHistoryCtrl", function($scope, recordNewFactory, userFactory, $window, $routeParams, $location, $rootScope){
    
    const vm = $scope;
    const url = "http://localhost:3000";
            

    // const user = userFactory.getCurrentUser();

    // let recordType = "";

    // Get and Post
    const getPostAll = "family_histories";
    // Patch, Delete, and Get a record
    const patchDeleteGetIndiv = "family_histories/:id";
    // const patchDeleteGetIndiv = "family_histories/";
    


        // vm.selectedFormType = vm.newRecordFamilyHistory;
        // gathers data from form to send to db
        vm.record = {
            familyMemberRelation: "",   
            prionDisease: "",            
            cardiacDisease: "",          
            cardiacEvent: "",            
            cardiacEventAges: "",        
            cardiacDeath: "",           
            cardiacDeathAge: "",         
            diabetes: "",                 
            diabetesType: "",             
            organDiseases: "",            
            organDiseaseName: "",        
            respiratoryDisease: "",       
            respiratoryDiseaseNames: "",  
            cancer: "",                   
            cancerDeath: "",              
            cancerTypes: "",              
            cancerEventAge: "",          
            highBloodPressure: "",       
            stroke: "",                   
            alzheimersOrDementia: "",     
            osteoporosis: "",    
            bleedingDisorder: "",         
            // bleedingDisorder: ""  
            // uid: user,
            isCompleted: false
        };

       

        vm.submitNewRecordFamilyHistory = function(record){
            let tok = userFactory.tokentok();

            console.log("tok in familyCtr; ", tok);
            recordNewFactory.addRecord(record, getPostAll, tok);
            
                $window.location.href = "#!/newRecordFamilyHistory";
                console.log("submitNewRecordFamilyHistory fired at newRecordFamilyHistoryCtrl");
        };

});

    // GET /todos 	List all todos
    // POST /todos 	Create a new todo
    // GET /todos/:id 	Get a todo
    // PUT /todos/:id 	Update a todo
    // DELETE /todos/:id 	Delete a todo and its items
    // GET /todos/:id/items 	Get a todo item
    // PUT /todos/:id/items 	Update a todo item
    // DELETE /todos/:id/items 	Delete a todo item



//     familyMemberRelation   :string 
//     prionDisease           :boolean 
//     cardiacDisease         :boolean 
//     cardiacEvent           :boolean 
//     cardiacEventAges       :string 
//     cardiacDeath           :boolean
//    cardiacDeathAge        :string 
//    diabetes                :boolean 
//    diabetesType            :string 
//    organDiseases           :boolean 
//    organDiseaseName       :string 
//    respiratoryDisease      :boolean 
//    respiratoryDiseaseNames :string 
//    cancer                  :boolean 
//    cancerDeath             :boolean 
//    cancerTypes             :string 
//    cancerEventAge          :integer 
//    highBloodPressure       :boolean 
//    stroke                  :boolean 
//    alzheimersOrDementia    :boolean 
//    osteoporosis            :boolean 
//    bleedingDisorder        :boolean