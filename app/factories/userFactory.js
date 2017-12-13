"use strict";

app.factory("userFactory", function($q, $http){
    
    console.log("app userFactory is doing something 1: ");
    
    // default to null, checked and updated onAuthStateChanged
    // and used throughout the application to check if there is a current user
    // and if so, what their firebase uid is.
    let currentUser = null;

    const logIn = function(user){

        console.log("app userFactory is doing something at logIn: ");
                       
    };

    const logOut = function(){
        console.log("app userFactory is doing something at logOut: ");
    
    };

    // console.log("app userFactory is doing something just before the return at the end: ");
    
    return {

        // getCurrentUser,
        logIn,
        logOut
        // register
        // isAuthenticated,
        
    };

});