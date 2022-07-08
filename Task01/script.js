const randomNumber = (a) => {
  let arr = [];
  for (let i = 0; i < a; i++) {
    arr.push(Math.round(Math.random()*100)); 
  }
return arr;
}
console.log(randomNumber(8));