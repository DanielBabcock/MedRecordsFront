"use strict";
/*
    handle data and provide functionality to edit a task
 */

app.controller("newRecordFamilyHistoryCtrl", function($scope, recordNewFactory, userFactory, $window, $routeParams, $location, $rootScope){
    
    const vm = $scope;
    const url = "http://localhost:3000";
            

    // Get and Post
    let getPostAll = "family_histories";
    // let getPostAll = "family_history";

    // Patch, Delete, and Get a record
    let patchDeleteGetIndiv = "family_histories/:id";
    // const patchDeleteGetIndiv = "family_histories/";
    vm.record = {};
        // gathers form data for database
        // vm.record = { 
        //     family_history:{
        //         patient_id: "",
        //         family_member_relation: "",   
        //         prion_disease: "",            
        //         cardiac_disease: "",          
        //         cardiac_event: "",            
        //         cardiac_event_ages: "",        
        //         cardiac_death: "",     
        //         cardiac_death_age: "",
        //         diabetes: "",                 
        //         diabetes_type: "",             
        //         organ_diseases: "",            
        //         organ_disease_name: "",        
        //         respiratory_disease: "",       
        //         respiratory_disease_names: "",  
        //         cancer: "",                   
        //         cancer_death: "",              
        //         cancer_types: "",              
        //         cancer_event_age: "",          
        //         high_blood_pressure: "",       
        //         stroke: "",                   
        //         alzheimers_or_dementia: "",     
        //         osteoporosis: "",    
        //         bleeding_disorder: ""        
        //         // uid: user,
        //         // isCompleted: false
        //     }
        // };

       

        vm.submitNewRecordFamilyHistory = function(record){
            let tok = userFactory.tokentok();

            console.log("tok in familyCtr; ", tok);
            recordNewFactory.addRecord(vm.record, getPostAll, tok);
            
                $window.location.href = "#!/newRecordFamilyHistory";
                console.log("submitNewRecordFamilyHistory fired at newRecordFamilyHistoryCtrl");
        };

});





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