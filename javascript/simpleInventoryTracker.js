
// simpleInventoryTracker.js

// declaring and initializing an empty array

let inventory =  [];

// add products

inventory.push("Car");
inventory.push("Van");
inventory.push("Train");
inventory.push("Aeroplane");
inventory.push("Motorbike");
inventory.push("Jet");
inventory.push("Ship");

// Displaying the inventory
for(let i =0; i < inventory.length; i++){
    console.log((i + 1) + " | " + inventory[i]);
}

// Remove the last item

inventory.pop();

console.log("Updated Inventory");

for(let i =0; i< inventory.length; i++){
    console.log((i + 1) + " | " + inventory[i]);
}
