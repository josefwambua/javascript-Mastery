let temps = [30,34,32,31];

let sum = 0;

for (let i =0; i < temps.length; i++){
    sum += temps[i];
}

console.log("Average Temparature:", sum/temps.length)