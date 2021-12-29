const results = require("./results.json");
const fs = require("fs");
const numbersResult = {}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function removeOfResults(sequence) {
  delete results[sequence];
}

function mapNumbers(array){
  for(let i of array){
    if(numbersResult[i]){
      numbersResult[i]++;
      continue;
    }

    numbersResult[i] = 1;
  }
}

function removeDuplicateNumbers() {
  let sequencesDuplicates = 0;
  const filtered = Object.entries(results).map(([val]) => {
    const arrayOfNumbers = val.split("_");
    const result = hasDuplicates(arrayOfNumbers);

    if (result) {
      mapNumbers(arrayOfNumbers);
      removeOfResults(val);
      sequencesDuplicates++;
    }
  });

  console.log("\n\n Resultado: " + sequencesDuplicates);
}

removeDuplicateNumbers();
fs.writeFileSync("./filteredResults.json", JSON.stringify(results, null, 2));
fs.writeFileSync("./numbersResult.json", JSON.stringify(numbersResult, null, 2));
