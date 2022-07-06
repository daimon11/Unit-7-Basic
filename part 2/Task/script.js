const randomNum = Math.round(Math.random() * 100);
console.log(randomNum);

const guessNumber = (randomNum) => {
  let userNumber = prompt('Привет! Я загадал число, попробуй отгадать:', '');
  for (i = 0; i < randomNum; i++) {
    if (isNaN(userNumber) || userNumber === "" || userNumber === 0) {
      alert('Некоректные данные');
      console.log(userNumber);
      break;
    } else if (userNumber === null) {
      break;
    } else if (userNumber > randomNum && userNumber !== null) {
      userNumber = +prompt('Меньше!', '');
      console.log(userNumber);
    } else if (userNumber < randomNum && userNumber !== null) {
      userNumber = +prompt('Больше!', '');
      console.log(userNumber);
    } else if (userNumber === randomNum) {
      userNumber = alert('Точно!');
      console.log(userNumber);
      break;
    } else {
      alert('Неверное решение');
      break;
    }
  }
}

guessNumber(randomNum);
