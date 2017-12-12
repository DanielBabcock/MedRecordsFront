// ../../partials/userWelcome/welcome.html

// authorization and new user

// 


"use strict";

/*
    provides the basic auth functionality for firebase
    as well a couple of additional helpers and utility methods related to user stuff.
 */

app.factory("welcomeFactory", function($q, $http){
    
    console.log("app userFactory is doing something 1: ");
    
    // default to null, checked and updated onAuthStateChanged
    // and used throughout the application to check if there is a current user
    // and if so, what their firebase uid is.
    let currentUser = null;

    
    // Create an instance of the Google provider object

    // const provider = new firebase.auth.GoogleAuthProvider();

    // if a user is authenticated, resolve true, else reject false
    // this is returns a promise whose status is checked in the resolve
    // to many of the paths configure with $routeprovider in app.js
    // they will be injected when the controller is instantiated, 
    // and are available to $scope in that controller under $resolve.
    // else a $routeChangeError will be fired
    // const isAuthenticated = function (){
    //     return new Promise ((resolve, reject) => {
    //         // firebase.auth().onAuthStateChanged(user => {
    //             // if (user){
    //             //     currentUser = user.uid;
    //             //     resolve(true);
    //             // }else {
    //             //     reject(false);
    //             // }
    //         // });
    //     });
    // };

    // const getCurrentUser = function(){
    //     return currentUser;
    // };


    const logIn = function(user){
        // return firebase.auth()
        signInWithEmailAndPassword(user.email, user.password);
        
        console.log("app userFactory is doing something at logIn: ");
                       
    };

    

    const logOut = function(){
        // return firebase.auth().signOut();
    };

    // console.log("app userFactory is doing something at logOut: ");
    

    // this takes an object created in the controller
    // which has an email and password from the form data
    // gathered in user.html
    const register = function(user){
        // return auth()
        //                .createUserWithEmailAndPassword(user.email, user.password);
    };

    // console.log("app userFactory is doing something at register: ");
    
    // const authWithProvider = function(){
    //     // return auth().signInWithPopup(provider);
    // };

    return {

        // getCurrentUser,
        logIn,
        logOut,
        register
        // isAuthenticated,
        // authWithProvider
        
    };

    // console.log("app userFactory is doing something at end: ");
    
});