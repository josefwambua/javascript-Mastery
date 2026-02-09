// Understanding how real-world data is modeled in JavaScript using objects and how multiple objects are managed using arrays. 
// This concept forms the foundation of backend systems, APIs, and frontend state management.

// To build a basic product inventory system using:

// Arrays

// Objects

// Loops

// Conditional logic

// And to understand real-world constraints, such as:

// Preventing negative stock

// Detecting out-of-stock products

// Handling logic execution order

//  Problem Statement

// Store multiple products in an array

// Each product has name, price, and stock

// Sell a product by reducing stock

// Detect when stock reaches zero

// Notify admin when a product is out of stock



// Solution
let products = []; // Declaring and initializing the items into an empty array


// Add products
products.push({ name: "Phone", price: 400000, stock: 0 });
products.push({ name: "Laptop", price: 3000, stock: 10 });

// Try selling one Phone
if (products[0].stock > 0) {
    products[0].stock--;
} else {
    console.log("Cannot sell Phone — Out of stock");
}

// Check availability
for (let i = 0; i < products.length; i++) {
    if (products[i].stock === 0) {
        console.log(products[i].name + " is out of stock");
        console.log("Notify Admin");
    }
}

// Display products
for (let i = 0; i < products.length; i++) {
    console.log(
        products[i].name +
        " | Price: " + products[i].price +
        " | Stock: " + products[i].stock
    );
}
