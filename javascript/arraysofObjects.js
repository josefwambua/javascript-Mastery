let products = [
    {name: "phone", price: 5000, stock: 100},
    {name: "Laptop", price: 12000, stock: 3},
    {name: "Mouse", price: 39, stock: 0}

]
console.log(products)

// looping through them

for (let i = 0; i < products.length; i++){
    if(products[i].stock === 0){
        console.log(products[i].name + "Is out of stock")
    }
}
