let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);

const isNum = (num) => {
  switch (true) {
    case (num === null):
      alert('Пока-Пока!');
      break;
    case (isNaN(num) || num === ''):
      alert('Вы ввели неккореткное значение!');
      guessNumber();
    default:
      return !isNaN(parseFloat(num));
  }
}

const guessNumber = () => {
  let userNum = prompt('Привет! Я загадал число от 1 до 100. Попробуйте отгадать:');
  if (isNum(userNum)) {
    userNum = +userNum;
    switch (true) {
      case (userNum > randomNum):
        alert('Вы ввели большее число');
        return guessNumber();
      case (userNum < randomNum):
        alert('Вы ввели меньшее число');
        return guessNumber();
      case (userNum === randomNum):
        alert('Угадал!');
        break;
    }
  } else {
    return userNum;
  }
}

guessNumber();
