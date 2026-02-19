// Adding and displaying items in an inventory
// steps
// Initialize products
// add products
// display products

let inventory = {
    products : [],

    // adding
    addProducts :  function(name, price, stock){
        this.products.push({name, price, stock})

    },

    // listing products

    listProducts: function(){
        for (let i = 0; i <this.products.length; i++){
            console.log(
               this.products[i].name +
                " | Stock: " + this.products[i].stock
            )
        }
    }
}
inventory.addProducts("Phone", 2000, 3);
// Adding and displaying items in an inventory
// steps
// Initialize products
// add products
// display products

inventory.addProducts("Laptop", 5000, 2);
inventory.addProducts("Headphones", 500, 10);
inventory.listProducts();   