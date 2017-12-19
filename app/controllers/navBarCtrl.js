"use strict";

/*
    the main job of this controller is to bind data related to whether a user is logged in or not
    to the the scope of the navbar, which provides conditional affordances based on this
    for instance, a user doesn't see the 'logout' button until they are logged in...
 */
app.controller("navBarCtrl", function($scope, $window, $rootScope, userFactory, $location){

  
    let user = null;

    const vm = $scope;
    
    vm.account = {};
              
        // userFactory.isAuthenticated();

        vm.authentication = {
            email: "",
            password: ""
        };


        vm.submitUser = function(){
            console.log("userCtrl 1: ");
            userFactory.addUser(vm.authentication);
            console.log("vm.auth: ", vm.authentication);
                $window.location.href = "#!/home";
        };
         

        // vm.isLoggedIn = false;

        vm.logoutUser = () => userFactory.logoutUser();
            if (user) {
                vm.isLoggedIn = true;
                vm.$apply();
              } else {
                vm.isLoggedIn = false;
                $window.location.href = "#!/login";
              }
        });

        // scope.login = function() {
        //     // configuration object
        //     var config = { /* ... */ }
          
        //     $http(config)
        //     .success(function(data, status, headers, config) {
        //       if (data.status) {
        //         // succefull login
        //         User.isLogged = true;
        //         User.username = data.username;
        //       }
        //       else {
        //         User.isLogged = false;
        //         User.username = '';
        //       }
        //     })
        //     .error(function(data, status, headers, config) {
        //       User.isLogged = false;
        //       User.username = '';
        //     });
        //   }