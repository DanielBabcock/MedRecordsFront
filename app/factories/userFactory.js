"use strict";

app.factory("userFactory", function($q, $http, $window){
    
    console.log("app userFactory is doing something 1: ");
    
   
    let currentUser = null;



    // const isAuthenticated = function (){
    //     return new Promise ((resolve, reject) => {
    //         auth().onAuthStateChanged(user => {
    //             if (user){
    //                 currentUser = user.uid;
    //                 resolve(true);
    //             }else {
    //                 reject(false);
    //             }
    //         });
    //     });
    // };

    // const getCurrentUser = function(){
    //     return currentUser;
    // };

    //        authenticate POST   /authenticate(.:format)            authentication#authenticate

    const addUser = function(user){
        let newObj = JSON.stringify(user);
            
        console.log("newObj:", newObj);

        // supposed to help stay logged in despite a refresh
        // function init() {
        //     if ($window.sessionStorage.currentUser) {
        //         currentUser = JSON.parse($window.sessionStorage.currentUser);
        //     }
        //   }
        //   init();

            return $http.post("http://localhost:3000/authenticate", newObj)
                .then(data => data)
                // save the returned token to reuse until user logout
                .catch(error => console.log("error @ userFactory addUser() ", error.message));

    };


   


    const logoutUser = function(user){
        var deferred = $q.defer();
      
        $http({
          method: "POST",
          url: "http://127.0.0.1:8080/welcome",
          headers: {
            "access_token": currentUser.accessToken
          }
        }).then(function(result) {
          $window.sessionStorage.currentUser = null;
        //   currentUser = null;
          deferred.resolve(result);
        }, function(error) {
          deferred.reject(error);
        });
      
        return deferred.promise;
      };
        // };



    
    return {

        // getCurrentUser,
        addUser,
        logoutUser
        // register
        // isAuthenticated,
        
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

       
// GET /todos 	List all todos
// POST /todos 	Create a new todo
// GET /todos/:id 	Get a todo
// PUT /todos/:id 	Update a todo
// DELETE /todos/:id 	Delete a todo and its items
// GET /todos/:id/items 	Get a todo item
// PUT /todos/:id/items 	Update a todo item
// DELETE /todos/:id/items 	Delete a todo item