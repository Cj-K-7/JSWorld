const formularPanel = document.querySelector("#formularPanel");
const resultPanel = document.querySelector("#resultPanel");
const calculator = document.querySelector("#calculator");
const numberPad = document.querySelector("#numberPad");

resultPanel.innerText = "";
//function key pad
const operating = (numbers, operators) => {
  const result = numbers.reduce((acc, cur, idx) => {
    switch (operators[idx - 1]) {
      case "×":
        acc *= cur;
        return acc;
      case "*":
        acc *= cur;
        return acc;
      case "÷":
        acc /= cur;
        return acc;
      case "/":
        acc /= cur;
        return acc;
      default:
        acc += cur;
        return acc;
    }
  });
  return result;
};

const equalButtonClick = (value) => {
  let formular = value;
  if (/^[^0-9]/.test(value)) {
    formular = resultPanel.innerText + value;
  }

  const numbers = (formular + "")
    .split(/(?=-)|[^0-9.-]+/g)
    .filter((element) => element)
    .map((number) => parseFloat(number));
  const operators = (formular + "")
    .split(/[0-9.-]+/g)
    .filter((element) => element);

  const result = operating(numbers, operators);

  formularPanel.value = "";
  resultPanel.innerText = result;
  return result;
};

const functionButtonClick = (event) => {
  const {
    target: { value },
  } = event;
  switch (value) {
    case "=":
      equalButtonClick(formularPanel.value);
      return;
    case "√":
      formularPanel.value = Math.sqrt(formularPanel.value);
      return;
    case "x²":
      resultPanel.innerText = formularPanel.value ** 2;
      formularPanel.value = "";
      return;
    case "%":
      resultPanel.innerText = formularPanel.value / 2;
      formularPanel.value = "";
      return;
    default:
      resultPanel.innerText = formularPanel.value
        ? equalButtonClick(formularPanel.value)
        : equalButtonClick(resultPanel.innerText + formularPanel.value);
      formularPanel.value = "";
      break;
  }
  formularPanel.value += value;
};

const functionButtons = ["x²", "√", "%", "C", "÷", "×", "-", "+", "="];

for (let i = 0; i < functionButtons.length; i++) {
  const functionButton = document.createElement("button");
  functionButton.innerText = functionButtons[i];
  functionButton.value = functionButtons[i];
  functionButton.id = functionButtons[i];
  functionButton.classList.add("functionButton");
  functionButton.addEventListener("click", functionButtonClick);
  calculator.appendChild(functionButton);
}
const buttonClear = () => {
  console.log("Clear Panel");
  formularPanel.value = "";
  resultPanel.innerText = "0";
};

document.querySelector("#C").addEventListener("click", buttonClear);
//number Key pad
const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];

const numberButtonClick = (event) => {
  const {
    target: { value },
  } = event;
  formularPanel.value += value;
};

for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = document.createElement("button");
  numberButton.innerText = numberButtons[i];
  numberButton.value = numberButtons[i];
  numberButton.id = "num" + numberButtons[i];
  numberButton.classList.add("numberButton");
  numberButton.addEventListener("click", numberButtonClick);
  numberPad.appendChild(numberButton);
}
