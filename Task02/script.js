const randomNumber = (a, n, m) => {
  let arr = [];
  for (let i = 0; i < a; i++) {
    if (n > m) {
      arr.push(Math.round(Math.random() * (n - m) + m));
    } else if (n < m) {
      arr.push(Math.round(Math.random() * (m - n) + n));
    }
  }
return arr;
}
console.log(randomNumber(8, 22, -33));