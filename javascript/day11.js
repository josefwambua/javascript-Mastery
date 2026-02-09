// // // Manipulate arrays confidently

// // // Understand how data changes over time

// // // Read and write logic used in real applications

// // // Adding an element to the end of an Array

// // Real world: NEW Product added, new task created, new message recieved


// let cart = [];

// cart.push("Laptop");
// cart.push("Mouse")

// console.log(cart);


// // remove an element from the end

// cart.pop();
// console.log(cart);

// Adding notifications to the start 
// we use unshift method to add latest notification first
let notifications = [];

notifications.unshift("New login");
notifications.unshift("New order");




// remove from start 
// real world : Queue systems (first Comment, first served)

notifications.shift();
console.log(notifications);