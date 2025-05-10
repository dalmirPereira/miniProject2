const todoServices = require('../services/todoServices') //Import todos object that will receive the tasks

//-------------------------------- GET TODO LIST-----------------------------------------------
const getData = () => {
   const todos = todoServices.getTodos(); 

   return todos;
}   
//---------------------------------------------------------------------------------------

//-------------------------------- SAVE NEW TASK -----------------------------------------------
const saveTask = (title, desc) => {

    const id = todoServices.newId();

    //create the new task
    const todo = {
      id,
      title,
      desc,
      createdAt: todoServices.setDate(),
      isCompleted: false,
    };

    //push it in the storage object.
    todoServices.addTodo(todo);
    
}
//---------------------------------------------------------------------------------------

//-------------------------------- UPDATE NEW TASK -----------------------------------------------
const updateTask = (id, title, desc) => {
  
    //update todos
    todoUpdated = {
      id,
      title,
      desc,
      createdAt: todoServices.setDate(),
      isCompleted: false,
    };

    todoServices.updateTodo(todoUpdated);

}
//---------------------------------------------------------------------------------------

//-------------------------------- DELETE TASK -----------------------------------------------
const deleteTask = (id) => {

    todoServices.deleteTodo(id); //redirect to Services

}
//---------------------------------------------------------------------------------------

//-------------------------------- COMPLETE TASK -----------------------------------------------
const completeTask = (id) => {

   todoServices.completeTodo(id);

}
//---------------------------------------------------------------------------------------



module.exports = {
    getData,
    saveTask,
    updateTask,
    deleteTask,
    completeTask
}