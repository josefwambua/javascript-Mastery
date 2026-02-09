// Product Object E-commerce
let product = {
    id: 101,
    name: "Laptop",
    price : 12000,
    stock: 5,
    isAvailable: true

}
// Selling product

product.stock--;

if(product.stock === 0){
    product.isAvailable = false;
}
console.log(product);


// looping through the object

let user = {
    username : "admin",
    role: "manager",
    active : true
}
for (let key in user){
    console.log (key+ ":", user[key]);
}