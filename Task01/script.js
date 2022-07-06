const randomNumber = (a) => {
  let arr1 = [];
  for (let i = 0; i < a; i++) {
    arr1.push(Math.round(Math.random()*100)); 
  }
return arr1;
}
console.log(randomNumber(8));