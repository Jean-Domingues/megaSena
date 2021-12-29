const fs = require("fs");

function randomNumber() {
  const number = Math.floor(Math.random() * (61 - 1)) + 1;
  return number;
}

function getSequence() {
  let sequence = [];

  for (let i = 0; i < 6; i++) {
    sequence.push(randomNumber());
  }

  const stringSequence = sequence.join("_");
  return stringSequence;
}

function getResults() {
  const results = {};
  const selectResults = {};

  console.log("PEGANDO RESULTADOS\n");

  for (let i = 0; i < 8000000; i++) {
    const sequence = getSequence();
    if (results[sequence]) {
      ++results[sequence];

      if (results[sequence] > 1) {

        if(results[sequence] > 2) console.log('OPA', sequence);

        if (selectResults[sequence]) {
          ++selectResults[sequence];
          continue;
        }

        selectResults[sequence] = 2;
      }

      continue;
    }

    results[sequence] = 1;
  }

  fs.writeFileSync("./jsonOutput.json", JSON.stringify(selectResults, null, 2));
}

getResults();
console.log("FINALIZADO");
