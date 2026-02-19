// Create a product object with:

// name

// price

// stock

// Add methods:

// sell() → reduces stock safely

// checkStock() → prints stock status

let product = {
    name:"Phone",
    price:50000,
    stock:10,

    // selling product

    sell: function (){
        if(this.stock > 0){
        
            this.stock -- ;
            console.log(this.name +  " sold successfully")
        }else{
            console.log(this.name + " out of stock")
        }
    },
 // Method to check stock status
    checkStock: function () {
        console.log(this.name + " current stock: " + this.stock);
    
    }
}
// calling the functions
product.sell();
product.sell();
product.checkStock();

// recap
// define the Object
// create the method
// Execute the operation
// call the methods