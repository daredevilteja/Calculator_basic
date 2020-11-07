const numberButtons = document.querySelectorAll(".number");
const signButtons = document.querySelectorAll(".sign");
const equalsButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const input = document.getElementById("input");

let firstNumber = "";
let secondNumber = "";
let result = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.value);
    updateDisplay();
  });
});

signButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (secondNumber === "") {
      secondNumber = firstNumber;
      firstNumber = "";
    } else {
      result = compute(firstNumber, button.value, secondNumber);
      secondNumber = result;
      firstNumber = "";
    }
  });
});

/*equalsButton.addEventListener("click", () => {
  console.log(result);
});*/

function appendNumber(value) {
  if (value === "." && firstNumber.includes(".")) {
    return;
  }
  firstNumber += num;
  console.log(firstNumber);
}

function updateDisplay() {
  input.value = firstNumber;
}

function compute(first, sign, second) {
  const current = Number(first);
  const prev = Number(second);
  const op = sign;

  switch (op) {
    case "+":
      return prev + current;
      break;
    case "-":
      return prev - current;
      break;
    case "*":
      return prev * current;
      break;
    case "/":
      return prev / current;
      break;
  }
}
