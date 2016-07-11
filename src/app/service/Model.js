// ToDo model service definition
angular.module('toDoExercise')
.service('ToDoModel', function (){
  var service = this,
      // Setup of initial ToDos values
      todos = [
        { title: "Mow lawn", note: "Should be done by 13th may." },
        { title: "Wash car", note: "Use MkUiars Wax!" },
        { title: "Buy groceries", note: "Apples, Bananas and some tomatoes." }
      ];
  
  // method returning the whole ToDos collection
  service.allTodos = function () {
    return todos;
  };
  
  service.createStuff = function (aName, aNote) {
    service.todos.push({name: aName, note:aNote});
  };
})