let stock = [5,20, 0, 6,7,0];

let outofstock = 0;

for (let i= 0; i < stock.length; i++){
    if(stock[i] === 0){
        outofstock ++;
}
}
console.log("Items out of stock", outofstock);