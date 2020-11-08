const numberButtons = document.querySelectorAll(".number");
const signButtons = document.querySelectorAll(".sign");
const equalsButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const input = document.getElementById("input");

let firstNumber = "";
let secondNumber = "";
let oper = "";
let result = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.value);
    updateDisplay();
  });
});

signButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.value);
    updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  compute(firstNumber, oper, secondNumber);
  updateDisplay();
});

clearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

function appendNumber(value) {
  if (value === "." && firstNumber.includes(".")) {
    return;
  }
  firstNumber += value;
  console.log(firstNumber);
}

function updateDisplay() {
  if (oper !== undefined) {
    input.value = secondNumber + oper + firstNumber;
  } else {
    input.value = firstNumber;
  }
}

function chooseOperation(operation) {
  if (firstNumber === "") {
    return;
  }
  if (secondNumber !== "") {
    compute(firstNumber, oper, secondNumber);
  }
  oper = operation;
  secondNumber = firstNumber;
  firstNumber = "";
}

function compute(first, sign, second) {
  let computation = 0;
  const current = Number(first);
  const prev = Number(second);
  const op = sign;

  switch (op) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      break;
  }

  firstNumber = computation;
  oper = undefined;
  secondNumber = "";
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  oper = "";
}
