const randomNumber = (a, n, m) => {
  let arr1 = [];
  for (let i = 0; i < a; i++) {
    if (n > m) {
      arr1.push(Math.round(Math.random() * (n - m) + m));
    } else if (n < m) {
      arr1.push(Math.round(Math.random() * (m - n) + n));
    }
  }
return arr1;
}
console.log(randomNumber(8, 22, -33));