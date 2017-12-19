"use strict";

app.factory("userFactory", function($q, $http, $window, $cookies){
   
    let currentUser = null;
    const url = "http://localhost:3000";

    //  authenticate POST   /authenticate(.:format)            authentication#authenticate
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0NjA2NTgxODZ9.xsSwcPC22IR71OBv6bU_OGCSyfE89DvEzWfDU0iybMA

    var token;
    var current_user;
    var ck = $cookies;
    // const token = data.data.auth_token;

    // ********************************************************************************
    // *********************test code start***********************************************************

    // *********************test code end***********************************************************
    // ********************************************************************************

    const addUser = function(user){
        console.log("userfact 1: ");
        return $q((resolve, regect)=>{
            // let newObj = JSON.stringify(user);
            $http.post(`${url}/authenticate`, user)
            .then((data)=>{
                token = data.data.auth_token;
                console.log("userfact 2: ", token);
            });             
        });
       
        
    };


    // ********************************************************************************
    // ***********************COOKIES*********************************************************


    const setCookies = function(){
        let newCookie = ck.put('auth_token', token);
        let userCookie = ck.put('current_user', current_user);
        
        console.log(" setcookies newcookie: ", newCookie);
        console.log(" setcookies userCookie: ", userCookie);

        return newCookie, userCookie;
    };

    const getCookies = function(){
        // get zie cookies
        let cookieUserAuth = ck.get('auth_token');
        let cookieUserID = ck.get('current_user');
        // set global vars
        current_user = cookieUserID;
        token = cookieUserAuth;
        // put both in object to be returned
        let allCookies = {
            "user_id": cookieUserID,
            "user_auth": cookieUserAuth
        };
        console.log(" getCookies allCookies: ", allCookies);
        return allCookies;

    };

    //   ************test code

    // const add_new_message_post = function (a, b) {
    //     return $q((resolve, reject) => {
    //       let data = JSON.stringify(a);
    //       console.log('stringified data', a);
    
    //       $http.post(`${url}/technologies/${b}/messageboards`, a, {
    //         headers: { 'Authorization': `${get_cookies()}` }
    //       })
    //         .then((data) => {
    //           resolve(data);
    //         })
    //         .catch((error) => {
    //           reject(error);
    //         });
    //     });
    //   };

    //   ************test code





    // ********************************************************************************
    // ***********************LOGOUT*********************************************************
    const logoutUser = function(user){
        var deferred = $q.defer();
        return deferred.promise;
    };
        
    return {
        addUser,
        getCookies,
        setCookies,
        logoutUser
        // register
        // isAuthenticated
    };
});



// **********  NOTES BELOW THIS LINE:  :**************************************************************************************************************



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