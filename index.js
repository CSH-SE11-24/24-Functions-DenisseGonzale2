const prompt = require('prompt-sync')()
let tasks = []
// FUNCTION DEFINITIONS
// Write a function called addTask that takes in task as a parameter 
// The function should add the task to the end of the tasks array (push()) and console.log task + " added"


function addTask(task){
	let task=[];
	(push(task))
	console.log(task + "added")
}

// Write a function called printTasks (no parameters) that console logs the tasks array
function printTasks(){
	console.log(task)
}


// Write a function called firstTask (no parameters) that returns the first element of the tasks array
fubction firstTask(){
	console.log(task[0])
}


// Write a function called completeFirst (no parameters) that removes the first element (shift()) of the tasks array
 function completeFirst(){
	 task.shift()
 }

// FUNCTION CALLS
while (true) {
  console.log("Current tasks")
  // Call printTasks
    console.log(printTasks)
  
  // Prompt the user on what they want to do
    let question=prompt("What do you want to do?")
  // If the user says "add task", prompt the user on their task 
  // and call addTask with their task
 if (question== "add task"){
	 let question2= prompt( "What's your task?")
	 task.push(question2)
	 return addTask 
 }if (question== "first task"){
	 return firstTask
 }if(question=="complete first"){
	 return completeFirst
 }else if{
	 console.log("i don't know how to do that!")
 }
  // Else if user says "first task", call firstTask 
  // and console log the return value



  // Else if user says "complete first", call completeFirst



  // Else, says "I don't know how to do that! Try again."



  
}