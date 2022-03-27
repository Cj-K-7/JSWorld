const operation = document.querySelector("#operation");
const resultPanel = document.querySelector("#result");
const calculator = document.querySelector("#calculator");

operation.innerText = "";
result.innerText = " result";

const calculatorBtns = [
  "(",
  ")",
  "%",
  "C",
  "7",
  "8",
  "9",
  "÷",
  "4",
  "5",
  "6",
  "×",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

const calculating = (first, operator, second) => {
  let result;
  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "/":
      result = first / second;
      break;
    case "*":
      result = first * second;
      break;
  }
  console.log(first,second);
  resultPanel.innerHTML = result
  return result;
};

const formularTrans = (formular) => {
  let string = formular;
  if ((string + "").includes("×")) string = (formular + "").replace("×", "*");
  if ((string + "").includes("÷")) string = (formular + "").replace("÷", "/");

  const operators = (string + "").split(/[0-9]+/).filter((oper) => oper);
  const numbers = (string + "").split(/[+-/*]/);
    console.log(operators, numbers);
  calculating(parseFloat(numbers[0]),operators[0],parseFloat(numbers[1]));
};

const onClick = (event) => {
  const {
    target: { value },
  } = event;

  switch (value) {
    case "C":
      operation.innerText = "";
      return;
    case "=":
        formularTrans(operation.innerText);
              operation.innerText = "";
      return;
  }
  operation.innerText += value;
};

for (let i = 0; i < calculatorBtns.length; i++) {
  const btnText = calculatorBtns[i];
  let button = document.createElement("button");
  button.classList.add("btn");
  button.value = btnText;
  button.innerText = btnText;
  button.addEventListener("click", onClick);
  calculator.appendChild(button);
}
