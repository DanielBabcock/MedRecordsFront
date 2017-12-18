// // ../../partials/recordNew/......all htmls....

"use strict";

/*
    provide the basic crud interactions with firebase
*/


app.factory("recordNewFactory", function($q, $http, $scope){

    // I want this const   selectedFormType   to allow for the following functions to work for whichever form type is selected, otherwise I have t write a factory for every form.

// const selectedFormType = {};

// NOTES: ANGULARTOJOSN:::::   https://docs.angularjs.org/api/ng/function/angular.toJson

const url = "http://localhost:3000";
const vm = $scope;

    const addRecord = function(obj, recordType){
        let newObj = angular.toJson(obj);
        return $http.post(`${url}/${recordType}`, newObj);
        // return $http.post(`${url}`, newObj);

            // .then(data => data)
            // .catch(error => console.log("error", error.message));
    };

    const editRecord = function(id, obj) {
        return $q((resolve, reject)=>{
            let newObj = angular.toJson(obj);
            $http.patch(`${url}/items/${id}.json`, newObj)
                .then(data=> resolve(data))
                .catch(error => reject(error));
        });
    };

    const deleteRecord = function(id){
        return $q((resolve,reject)=>{
            $http.delete(`${url}/items/${id}.json`);
            //     .then(response => resolve(response))
            //     .catch(error => reject(error));
        });
    };

    const getIndivRecord = function(itemId){
        return $q((resolve,reject)=> {
            $http.get(`${url}/items/${itemId}.json`);
            //     .then(item => resolve(item.data))
            //     .catch(error => reject(error));
        });
    };

    return {

        addRecord,
        editRecord,
        deleteRecord,
        getIndivRecord
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

    //    example
// GET /todos 	List all todos
// POST /todos 	Create a new todo
// GET /todos/:id 	Get a todo
// PUT /todos/:id 	Update a todo
// DELETE /todos/:id 	Delete a todo and its items
// GET /todos/:id/items 	Get a todo item
// PUT /todos/:id/items 	Update a todo item
// DELETE /todos/:id/items 	Delete a todo item