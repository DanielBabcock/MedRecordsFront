"use strict";

app.factory("recordFactory", function($q, $http, userFactory){

const url = "http://localhost:3000";

    const addRecord = function(record, recordType, tokentok){
        // let newObj = angular.toJson(record);
        let newObj = record;
        // console.log("newObj in factory: ", newObj);

        
            return $q((resolve, reject)=>{
                $http({
                method: 'POST', 
                url: `${url}/${recordType}`, 
                headers: {'Authorization': tokentok},
                data: newObj,
                });
            });
    };


    const editRecord = function(recordType, recordID, tokentok) {
        // let newObj = record;
        // console.log("editRecord in record factory: ");

        console.log("url in editRecord: ", url);
        console.log("recordType in editRecord:", recordType); 
        return $q((resolve, reject)=>{
            $http({
                method: 'PATCH', 
                url: `${url}/${recordType}/${recordID}`, 
                headers: {'Authorization': tokentok}
                // data: newObj
                });

            // let newObj = angular.toJson(obj);
            // $http.patch(`${url}/${recordType}.json`, newObj)
            //     .then(data=> resolve(data))
            //     .catch(error => reject(error));
        });
    };

    const deleteRecord = function(recordType, recordID, tokentok){
        // let newObj = record;
        console.log("deleteRecord in record factory: ");

        // return $q((resolve,reject)=>{
        return $q((resolve, reject)=>{

            console.log("recordID in delete @ record factory: ", recordID);
            console.log("tokentok in delete @ record factory: ", tokentok);

            $http({
                method: 'DELETE', 
                url: `${url}/${recordType}/${recordID}`,
                // ${id}, 
                headers: {'Authorization': tokentok}
                // data: newObj
                })
            // $http.delete(`${url}/${recordType}.json`);
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    // const deleteBooks = function(id){
    //     //console.log("item id", id);
    //     return $q((resolve, reject) => {
    //         $http.delete(`http://localhost:3000/user_books/${id}`, {headers:
    //             {
    //                 Authorization: `${userFactory.getTokenBack()}`,
    //             },
    //         })
    //         .then((response) => {
    //             resolve(response);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    //     });
    // };

    const getRecord = function(recordType, tok){
        // let newObj = record;
        // console.log("recordType @ getRecord in recordFactory:", recordType);
        // console.log("url @ getRecord in recordFactory: ", url);
        // console.log("tok @ getRecord in recordFactory: ", tok);
        
        return $q((resolve,reject)=> {
            $http({
                method: 'GET', 
                url: `${url}/${recordType}`, 
                headers: {'Authorization': tok}
                // data: newObj
                // console.log("tok at get: ", tok)
            })
                
                .then(item => resolve(item.data))
                .catch(error => reject(error));
        });
    };

    return {
        addRecord,
        editRecord,
        deleteRecord,
        getRecord
    };

});

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

