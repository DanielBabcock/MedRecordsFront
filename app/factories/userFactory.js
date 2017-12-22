"use strict";

app.factory("userFactory", function($q, $http, $window, $cookies){
   
    let currentUser = null;
    const url = "http://localhost:3000";

    //  authenticate POST   /authenticate(.:format)            authentication#authenticate
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0NjA2NTgxODZ9.xsSwcPC22IR71OBv6bU_OGCSyfE89DvEzWfDU0iybMA
// send key value pair of key = token and value = hash in header of every request.


    var token;
    var current_user;
    var ck = $cookies;
    // const token = data.data.auth_token;
    let tok = null;
    // ********************************************************************************
    // *********************test code start***********************************************************
    // "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0NjA2NTgxODZ9.xsSwcPC22IR71OBv6bU_OGCSyfE89DvEzWfDU0iybMA" http://localhost:3000/items
    // []
    // *********************test code end***********************************************************
    // ********************************************************************************
    const tokentok = function(){
        // console.log("tokentok in userFact: ", tok);

        return tok;
    };

    const addUser = function(user, token){
        // console.log("userfact 1: ");
        return $q((resolve, regect)=>{
            $http.post(`${url}/authenticate`, user)
            .then((data)=>{
                token = data.data.auth_token;
                tok = data.data.auth_token;
                // console.log("userfact tokentok: ", tokentok());
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

    // ********************************************************************************
    // ***********************COOKIES*********************************************************



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
        tokentok,
        addUser,
        // getCookies,
        // setCookies,
        logoutUser
        // register
        // isAuthenticated
    };
});



// **********  NOTES BELOW THIS LINE:  :**************************************************************************************************************

