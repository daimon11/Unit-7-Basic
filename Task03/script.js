const randomNumber = (a, n, m, z) => {
  let arr1 = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let random = 0;
  for (let i = 0; i < a; i++) {
    if (z === 'even') {
      random = Math.round(min - 0.5 + Math.random() * (max - min + 1))
      if (random % 2 !== 0) {
        arr1.push(random);
      } else {
        arr1.push(random - 1);
      };
    };
    if (z === 'odd') {
      random = Math.round(min - 0.5 + Math.random() * (max - min + 1));
      if (random % 2 === 0) {
        arr1.push(random);
      } else {
        arr1.push(random - 1);
      };
    };
  }
  return arr1;
}

console.log(randomNumber(8, -100, 33, 'odd'));