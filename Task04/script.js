const randomNumber = (n, m) => {
  let arrDate = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let year = 0;
  for (let i = min; i < max; i++) {
    if (i % 4 === 0 && i % 100 !== 0) {
      year = i + ','
      arrDate.push(year);
      };
    }
    return arrDate;
  }

console.log(randomNumber(1899, 2008));