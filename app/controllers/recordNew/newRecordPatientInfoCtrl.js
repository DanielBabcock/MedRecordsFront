"use strict";

/*
    
    handle data and provide functionality to edit a task

 */

app.controller("newRecordPatientCtrl", function($scope, recordNewFactory, $routeParams, $location){

    const vm = $scope;
    const url = "http://localhost:3000";

    
    // bind a few values to scope
    vm.title = "Edit Task";
    vm.submitButtonText ="Edit Item";
    vm.task = {
        assignedTo: "",
        dependencies: "",
        dueDate: "",
        urgency: "",
        task: "",
        isCompleted: "",
        location: ""
    };


    // display the details of a given task in form.html
    // invoke from details view when the 'edit' button is clicked
    const showEditTask = function(){
        recordNewFactory.getSingleTask($routeParams.itemId)
            .then(data => {
                console.log("data", data);
                vm.task = data;
                vm.task.id = $routeParams.itemId;
            });
    };

    // edit task
    // using location to redirect
    vm.submitTask = function(){
        recordNewFactory.editTask($routeParams.itemId, vm.task)
            .then(data => $location.path('/task-list'));
    };

    showEditTask();

      // gather data from form to send to db
    //   vm.task = {
    //     assignedTo: "",
    //     dependencies: "",
    //     dueDate: "",
    //     urgency: "",
    //     task: "",
    //     isCompleted: false,
    //     location: "",
    //     uid: user
    // };

    // call factory to add vm.task to db
    // set the href to '#!/task-list'
    // this redirects and applies a digest cycle 
    // so your new task is displayed with the others
    // if you use $location.url, you will only see the new task 
    // once you refresh and force a digest cycle
    vm.submitTask = function(){
        recordNewFactory.addTask(vm.task);
            // $window.location.href = "#!/task-list";
    };

});

    // GET /todos 	List all todos
    // POST /todos 	Create a new todo
    // GET /todos/:id 	Get a todo
    // PUT /todos/:id 	Update a todo
    // DELETE /todos/:id 	Delete a todo and its items
    // GET /todos/:id/items 	Get a todo item
    // PUT /todos/:id/items 	Update a todo item
    // DELETE /todos/:id/items 	Delete a todo item