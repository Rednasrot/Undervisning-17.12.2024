const numberOne = document.querySelector('#number1');
const numberTwo = document.querySelector('#number2');
const formula = document.querySelector('#formula');
const mathButton = document.querySelector('#math-button');

mathButton.addEventListener('click', function (event) {
  event.preventDefault();

  const firstNumber = Number(numberOne.value);
  const secondNumber = Number(numberTwo.value);

  if (formula.value === 'addition') {
    console.log(firstNumber + secondNumber);
  } else if (formula.value === 'subtraction') {
    console.log(firstNumber - secondNumber);
  } else if (formula.value === 'multiply') {
    console.log(firstNumber * secondNumber);
  } else if (formula.value === 'division') {
    console.log(firstNumber / secondNumber);
  } else {
    console.log('No forumla selected');
  }
});
