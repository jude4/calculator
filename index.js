const display = document.querySelector(".display");
const controlButtons = document.querySelector('.controls').children
const allSymbols = ["+", "-", "X", "÷", "%", "%", "C", "=", "DEL"];

let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';
let totalInput = '';

const calculate = () => {
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);


  if (symbol === '+') result = firstValue + secondValue;
  if (symbol === "-") result = firstValue - secondValue;
  if (symbol === 'X') result = firstValue * secondValue;
  if (symbol === "÷") result = firstValue / secondValue;
  if (symbol === "%") result = firstValue % secondValue;


  display.innerHTML = result;
  firstValue = result;
  secondValue = '';

}

for (let button of controlButtons) {
  button.addEventListener("click", () => {
    const { innerHTML: btnValue } = button;
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    if (!secondValue && btnValue === '=') return null;

    else if (btnValue === 'C') {
      firstValue = secondValue = symbol = '';
      return display.innerHTML = '';
    }
      
    else if (btnValue === 'DEL') {
      symbol = btnValue;
      return display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    }

    else if (firstValue && btnValueIsSymbol) {
      secondValue && calculate();
      symbol = btnValue
    }
    else if (!symbol) firstValue += btnValue;

    else if (symbol) secondValue += btnValue;

    if (btnValue !== '=') display.innerHTML += btnValue;

  });
}