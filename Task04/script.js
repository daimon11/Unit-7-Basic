const randomNumber = (n, m) => {
  let arrDate = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let year = 0;
  for (let i = min; i < max; i++) {
    if (i % 4 === 0) {
      if (i % 100 === 0 && i % 400 !== 0) {
        continue;
      }
      year = i + ','
      arrDate.push(year);
    };
  }
  return arrDate;
}

console.log(randomNumber(1250, 1350));