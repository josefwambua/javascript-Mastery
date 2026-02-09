// simpleProductManagementSystem

let products = [];

function addProduct(name, price, stock) {
    products.push({ name: name, price: price, stock: stock });
}

function listProducts() {
    if (products.length === 0) {
        console.log("No products in inventory.");
        return;
    }
    console.table(products);
}

function findProductIndex(name) {
    let target = name.toLowerCase();
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase() === target) {
            return i;
        }
    }
    return -1;
}

function sellProduct(name, quantity) {
    let index = findProductIndex(name);
    if (index === -1) {
        console.log(name + " not found.");
        return false;
    }
    if (quantity <= 0) {
        console.log("Quantity must be greater than 0.");
        return false;
    }
    if (products[index].stock < quantity) {
        console.log("Not enough stock for " + name + ".");
        return false;
    }
    products[index].stock -= quantity;
    console.log("Sold " + quantity + " " + products[index].name + "(s).");
    if (products[index].stock === 0) {
        console.log(products[index].name + " is now OUT OF STOCK.");
    }
    return true;
}

function restockProduct(name, quantity) {
    let index = findProductIndex(name);
    if (index === -1) {
        console.log(name + " not found.");
        return false;
    }
    if (quantity <= 0) {
        console.log("Quantity must be greater than 0.");
        return false;
    }
    products[index].stock += quantity;
    console.log("Restocked " + quantity + " " + products[index].name + "(s).");
    return true;
}

function updateProduct(index, newName, newPrice, newStock) {
    products[index].name = newName;
    products[index].price = newPrice;
    products[index].stock = newStock;
}

function deleteProduct(index) {
    let removed = products.splice(index, 1);
    console.log("Deleted " + removed[0].name + ".");
}

function inventoryValue() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].stock;
    }
    return total;
}

function productChoices() {
    return products.map((p) => p.name);
}

async function main() {
    let inquirer = (await import("inquirer")).default;

    addProduct("Laptop", 2000, 40);
    addProduct("Wallet", 30, 3);

    while (true) {
        let answers;
        try {
            answers = await inquirer.prompt([
                {
                    type: "list",
                    name: "action",
                    message: "Choose an action",
                    choices: [
                        "List products",
                        "Add product",
                        "Update product",
                        "Sell product",
                        "Restock product",
                        "Delete product",
                        "Inventory value",
                        "Exit"
                    ]
                }
            ]);
        } catch (err) {
            if (err && err.name === "ExitPromptError") {
                console.log("\nPrompt closed. Goodbye.");
                break;
            }
            throw err;
        }

        if (answers.action === "List products") {
            listProducts();
        } else if (answers.action === "Add product") {
            let addAnswers = await inquirer.prompt([
                { type: "input", name: "name", message: "Product name:" },
                {
                    type: "input",
                    name: "price",
                    message: "Price:",
                    validate: (v) => (!isNaN(Number(v)) && Number(v) >= 0) || "Enter a valid price."
                },
                {
                    type: "input",
                    name: "stock",
                    message: "Stock:",
                    validate: (v) => Number.isInteger(Number(v)) && Number(v) >= 0 || "Enter a whole number."
                }
            ]);
            addProduct(addAnswers.name, Number(addAnswers.price), Number(addAnswers.stock));
            console.log("Product added.");
        } else if (answers.action === "Update product") {
            if (products.length === 0) {
                console.log("No products to update.");
                continue;
            }
            let pick = await inquirer.prompt([
                { type: "list", name: "name", message: "Choose product:", choices: productChoices() }
            ]);
            let index = findProductIndex(pick.name);
            let current = products[index];
            let updateAnswers = await inquirer.prompt([
                { type: "input", name: "name", message: "New name:", default: current.name },
                {
                    type: "input",
                    name: "price",
                    message: "New price:",
                    default: String(current.price),
                    validate: (v) => (!isNaN(Number(v)) && Number(v) >= 0) || "Enter a valid price."
                },
                {
                    type: "input",
                    name: "stock",
                    message: "New stock:",
                    default: String(current.stock),
                    validate: (v) => Number.isInteger(Number(v)) && Number(v) >= 0 || "Enter a whole number."
                }
            ]);
            updateProduct(index, updateAnswers.name, Number(updateAnswers.price), Number(updateAnswers.stock));
            console.log("Product updated.");
        } else if (answers.action === "Sell product") {
            if (products.length === 0) {
                console.log("No products to sell.");
                continue;
            }
            let sellAnswers = await inquirer.prompt([
                { type: "list", name: "name", message: "Choose product:", choices: productChoices() },
                {
                    type: "input",
                    name: "quantity",
                    message: "Quantity to sell:",
                    validate: (v) => Number.isInteger(Number(v)) && Number(v) > 0 || "Enter a whole number."
                }
            ]);
            sellProduct(sellAnswers.name, Number(sellAnswers.quantity));
        } else if (answers.action === "Restock product") {
            if (products.length === 0) {
                console.log("No products to restock.");
                continue;
            }
            let restockAnswers = await inquirer.prompt([
                { type: "list", name: "name", message: "Choose product:", choices: productChoices() },
                {
                    type: "input",
                    name: "quantity",
                    message: "Quantity to add:",
                    validate: (v) => Number.isInteger(Number(v)) && Number(v) > 0 || "Enter a whole number."
                }
            ]);
            restockProduct(restockAnswers.name, Number(restockAnswers.quantity));
        } else if (answers.action === "Delete product") {
            if (products.length === 0) {
                console.log("No products to delete.");
                continue;
            }
            let del = await inquirer.prompt([
                { type: "list", name: "name", message: "Choose product:", choices: productChoices() },
                { type: "confirm", name: "confirm", message: "Are you sure?", default: false }
            ]);
            if (del.confirm) {
                let index = findProductIndex(del.name);
                deleteProduct(index);
            } else {
                console.log("Delete cancelled.");
            }
        } else if (answers.action === "Inventory value") {
            console.log("Total inventory value: " + inventoryValue());
        } else if (answers.action === "Exit") {
            console.log("Goodbye.");
            break;
        }
    }
}

main();
