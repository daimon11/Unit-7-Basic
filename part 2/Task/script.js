const randomNum = Math.round(Math.random() * 100);
console.log(randomNum);

let userNumber = prompt('Привет! Я загадал число от 1 до 100, попробуй отгадать:', '');
console.log(userNumber);
console.log(typeof (userNumber));

const guessNumber = (randomNum) => {
  for (i = 0; i < randomNum; i++) {
    if (!Number.isNaN(userNumber) && userNumber > 0 && userNumber !== null) {
      if (userNumber > randomNum) {
        userNumber = prompt('Многовато, попробуй меньше:', '');
        i++;
      } else if (userNumber < randomNum) {
        userNumber = prompt('Маловато, попробуй больше:', '');
        i++;
      } else {
        alert(`Верно, это число ${randomNum}!`);
        break;
      }
    } else if (userNumber === null) {
      break;
    } else {
      userNumber = prompt('Введи число!', '');
      i++
    }
  }
}
guessNumber(randomNum);

