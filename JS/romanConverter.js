const input = document.querySelector('#decimalNumber');
const output = document.querySelector('#romanNumber');

function convertToRoman(num) {
    let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let symbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let i = 12;
    let result = ""
    while (num > 0) {
      let div = Math.floor(num / numbers[i]);
      num = num % numbers[i];
      while (div--) {
        result += symbols[i];
      }
      i--;
    }
    return result
  }

  function display(event){
      const {target : {value}} = event;
      output.innerText = convertToRoman(value)
  }

  input.addEventListener("change", display)