// // ../../partials/userWelcome/profile.html

// "use strict";

// /*
//     provide the basic crud interactions with firebase
// */

// app.factory("profileFactory", function($q, $http){


//     // helper function to process the firebase object
//     // into an array with it's ugly id assigned as its local id
//     // const makeArray = function(object){
//     //     return Object.keys(object).map(key => {
//     //         object[key].id = key;
//     //         return object[key];
//     //     });
//     // };

//     // call firebase for all the items
//     // firebase returns an object of objects,
//     // fo we pass that to makeArray, a helper defined above
//     const getAllTasks = function(user){
//         return $q((resolve, reject)=>{
//             $http.get(`${url}/items.json?orderBy="uid"&equalTo="${user}"`)
//                 .then(items => resolve(makeArray(items.data)))
//                 .catch(error => reject(error));
//         });
//     };

//     // just using $http is fine here
//     const addTask = function(obj){
//         let newObj = JSON.stringify(obj);
//         return $http.post(`${url}/items.json`, newObj)
//             .then(data => data)
//             .catch(error => console.log("error", error.message));
//     };

//     // takes an item's id and a an object containing the property to update
//     const editTask = function(id, obj) {
//         return $q((resolve, reject)=>{
//             let newObj = JSON.stringify(obj);
//             $http.patch(`${url}/items/${id}.json`, newObj)
//                 .then(data=> resolve(data))
//                 .catch(error => reject(error));
//         });
//     };

//     // takes an id and deletes the corresponding task from the database
//     const deleteTask = function(id){
//         return $q((resolve,reject)=>{
//             $http.delete(`${url}/items/${id}.json`)
//                 .then(response => resolve(response))
//                 .catch(error => reject(error));
//         });
//     };


//     // returning methods defined above
//     return {

//         getAllTasks,
//         addTask,
//         editTask,
//         deleteTask,
//         getSingleTask
//     };

// });

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

       
// // GET /todos 	List all todos
// // POST /todos 	Create a new todo
// // GET /todos/:id 	Get a todo
// // PUT /todos/:id 	Update a todo
// // DELETE /todos/:id 	Delete a todo and its items
// // GET /todos/:id/items 	Get a todo item
// // PUT /todos/:id/items 	Update a todo item
// // DELETE /todos/:id/items 	Delete a todo item