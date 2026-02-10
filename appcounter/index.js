// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button


let countEl = document.getElementById("count-el") // passing arguments

console.log(countEl)
let count = 0;
function increment(){
    count = count + 1;
    countEl.innerText = count;
}

function save(){
    console.log(count)
}