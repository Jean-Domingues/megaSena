function randomNumber() {
  const number = Math.floor(Math.random() * (61 - 1)) + 1;
  return number;
}

function getResults() {
  const results = {};
  for (let i = 0; i < 100000; i++) {
    const sequence = randomNumber();
    if (results[sequence]) {
      results[sequence]++;
      continue;
    }
    results[sequence] = 1;
  }

  return results;
}

function filterResults() {
  const results = getResults();
  const sortable = Object.entries(results)
    .sort(([x, a], [y, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, ['num_' + k]: v }), {});

  return sortable;
}

console.log(filterResults());
