// // ../../partials/recordNew/......all htmls....

// "use strict";

// /*
//     provide the basic crud interactions with firebase
// */

// app.factory("recordNewFacotory", function($q, $http){


//     // just using $http is fine here
//     const addRecord = function(obj){
//         let newObj = JSON.stringify(obj);
//         // return $http.post(`${url}/items.json`, newObj)
//             // .then(data => data)
//             // .catch(error => console.log("error", error.message));
//     };

//     // takes an item's id and a an object containing the property to update
//     const editRecord = function(id, obj) {
//         return $q((resolve, reject)=>{
//             let newObj = JSON.stringify(obj);
//             // $http.patch(`${url}/items/${id}.json`, newObj)
//             //     .then(data=> resolve(data))
//             //     .catch(error => reject(error));
//         });
//     };

//     // takes an id and deletes the corresponding task from the database
//     const deleteRecord = function(id){
//         return $q((resolve,reject)=>{
//             // $http.delete(`${url}/items/${id}.json`)
//             //     .then(response => resolve(response))
//             //     .catch(error => reject(error));
//         });
//     };

//     const getIndivRecord = function(itemId){
//         return $q((resolve,reject)=> {
//             // $http.get(`${url}/items/${itemId}.json`)
//             //     .then(item => resolve(item.data))
//             //     .catch(error => reject(error));
//         });
//     };

//     // returning methods defined above
//     return {

//         // getAllRecords,
//         addRecord,
//         editRecord,
//         deleteRecord,
//         getIndivRecord
//     };

// });