let product = {
    name: "Laptop",
    price: 3000,
    stock: 1,

    sell: function(){
        if(this.stock > 0){
            this.stock--;
            console.log(this.name + " sold succesfully")
        }else{
            console.log(this.name +"is out of stock")
        }
    }
}

product.sell();
product.sell();
