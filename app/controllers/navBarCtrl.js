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
  
    //   vm.logIn = () => userFactory.logIn(vm.account)
    //           .then($window.location.href = '#!/home');  
              

        vm.submitUser = function(){
            userFactory.addUser(vm.authentication);
                // .then($window.location.href = '#!/home');
                
                console.log("movement @ navBarCtrl submitUser(): ");
                // $window.location.href = "#!/home";
                $window.location.href = "#!/newRecordFamilyHistory";
                
        };
         

        vm.isLoggedIn = false;
            vm.logoutUser = () => userFactory.logoutUser();


        // auth().
        // onAuthStateChanged(function(user) {
        //     if (user) {
        //         vm.isLoggedIn = true;
        //         vm.$apply();
        //     } else {
        //         vm.isLoggedIn = false;
        //         $window.location.href = "#!/login";
        //     }
        //     });
        

          
  });



  
      
      
  
  
