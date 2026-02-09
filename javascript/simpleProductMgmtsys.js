let products = [];

// Add products
products.push({ name: "Phone", price: 500, stock: 5 });
products.push({ name: "Laptop", price: 1200, stock: 2 });

// Display products
for (let i = 0; i < products.length; i++) {
    console.log(
        products[i].name +
        " | Price: " + products[i].price +
        " | Stock: " + products[i].stock
    );
}

// Sell one Laptop
products[1].stock--;

// Check availability
if (products[1].stock === 0) {
    console.log(products[1].name + " is now OUT OF STOCK");
}
