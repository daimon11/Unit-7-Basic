const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function randomOdd(a, n1, n2, z) {
  let arr = [];
  let sum = 0;
  let min = Math.min(n1, n2);
  let max = Math.max(n1, n2);
  if (z === 'odd') {
    min = min + !(min % 2);
    max = max - !(max % 2);
  } else if (z === 'even') {
    min = min - (min % 2);
    max = max - (max % 2);
  } 
  for (let i = 0; i < a; i++) {
    sum = min + random(0, (max - min) / 2) * 2;
    if (sum > max) {
      sum -= 1;
    } else if (sum < min) {
      sum += 1;
    }
    arr.push(sum);
  }
    return arr;
}
console.log(randomOdd(10, -30, -31, 'odd'));
console.log(randomOdd(10, -21, -20, 'even'));
console.log(randomOdd(10, 30, 31, 'odd'));
console.log(randomOdd(10, 21, 20, 'even'));
console.log(randomOdd(10, 30, 31));
console.log(randomOdd(10, 21, 20));