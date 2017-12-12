"use strict";

/*
    this controller is instantiated when the '_____.html' template 
    is rendered at the '/login' path.
    it uses the welcomeFactory to handle the registration of new users, 
    login with google.
 */

app.controller("welcomeCtrl", function($scope, $window, welcomeFactory, $location){
    
    console.log("app welcomeController is doing something 1: ");
    
 
    // welcomeFactory.isAuthenticated();
    // cardFactory,makeArray();
    // cardFactory.getAllCards()
    //     .then( (allCards) => {
    //         console.log("allCards", allCards);
    //     })

    // console.log("app welcomeController is doing something 2: ");
    
});