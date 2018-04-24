// Code goes here


// DOM variables
let title = document.getElementById('doc-title'),
    subtitle = document.getElementById('doc-subtitle'),
    roundOutput = document.getElementById('round-results'),
    floorOutput = document.getElementById('floor-results');

console.log(title);
//
let totalRand = 5; // Total random numbers, counting from 0
let loops = 50000;

// Arrays to hold results
let roundResults = [],
    floorResults = [];

title.innerText = "RNG Tester from 0-" + (totalRand-1);
subtitle.innerText ="Tested for " + loops + " numbers";

//Initialize arrays  Is this necessary?
for (let i = 0; i < totalRand+1; i++) {
  roundResults[i] = 0;
  floorResults[i] = 0;
}

for (let i = 0; i < loops; i++) {
  let randomRoundResult = Math.round(Math.random() * totalRand);
  roundResults[randomRoundResult]++;
  let randomFloorResult = Math.floor(Math.random() * totalRand);
  floorResults[randomFloorResult]++;
}

console.log(roundResults);
console.log(floorResults);

for (let i = 0; i < roundResults.length; i++){
  roundOutput.innerText += i +": " + roundResults[i] + "\n";
}

for (let i = 0; i < floorResults.length; i++){
  floorOutput.innerText += i + ": " + floorResults[i] + "\n";
}




