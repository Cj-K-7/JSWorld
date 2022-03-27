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

let records = { formulars: [""], results: [""] };

const formularTrans = (formular) => {
  let string = formular;
  if ((string + "").includes("×"))
    string = (formular + "").replace(/[×]/g, "*");
  if ((string + "").includes("÷"))
    string = (formular + "").replace(/[÷]/g, "/");
  if ((string + "").match(/^[+-/*]+/))
    string = records.results[records.results.length-1]+string;
    console.log(records.results)
    console.log(string);
  const operators = (string + "").split(/[0-9]+/).filter((oper) => oper);
  const numbers = (string + "").split(/[+-/*]+/).map((a) => parseFloat(a));

  const result = numbers.reduce((acc, cur, i) => {
    switch (operators[i - 1]) {
      case "+":
        acc += cur;
        break;
      case "-":
        acc -= cur;
        break;
      case "/":
        acc /= cur;
        break;
      case "*":
        acc *= cur;
        break;
    }
    return acc;
  });

  resultPanel.innerHTML = result;
  records.formulars.push(operation.innerText);
  records.results.push(resultPanel.innerHTML);
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
