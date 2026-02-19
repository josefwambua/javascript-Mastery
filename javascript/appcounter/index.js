// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button


let saveEl = document.getElementById("save-el") // passing arguments
let countEl = document.getElementById("count-el") // passing arguments
console.log(countEl)
let count = 0;
function increment(){
    count += 1;
    countEl.innerText = count;
}

function save(){

    let countStr = count + " - "

    saveEl.innerText += countStr
    console.log(count)
}