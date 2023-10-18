const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const output = document.getElementById("output-value");
const equals = document.getElementById("equals");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear-button");
const decimal = document.getElementById("decimal");
const divide = document.getElementById("divide");

let firstOperand = "";
let operator = "";
let lastOperand = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("click");
    setTimeout(() => {
      button.classList.remove("click");
    }, 80);
  });
});

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      output.textContent === "0" ||
      output.textContent === "undefined" ||
      output.textContent === "no >:("
    ) {
      output.textContent = "";
      output.textContent += button.textContent;
      operator = "";
    } else {
      output.textContent += button.textContent;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      (operator === "" &&
        output.textContent !== "no >:(" &&
        output.textContent !== "undefined") ||
      (output.textContent[0] === "-" &&
        output.textContent[output.textContent.length - 1] !== "-")
    ) {
      firstOperand = output.textContent;
      operator = button.textContent;
      output.textContent += button.textContent;
    }
  });
});

divide.addEventListener("click", () => {
  if (firstOperand === "0") {
    output.textContent = "no >:(";
  }
});

equals.addEventListener("click", () => {
  if (
    operator !== "" &&
    output.textContent !== "" &&
    output.textContent !== "no >:(" &&
    output.textContent !== "undefined"
  ) {
    lastOperand = output.textContent.substring(firstOperand.length + 1);
    output.textContent = evaluate(
      parseFloat(firstOperand),
      parseFloat(lastOperand),
      operator
    );
    firstOperand = output.textContent;
    operator = "";
  }
});

function evaluate(x, y, operator) {
  if (firstOperand !== "0" && lastOperand === "0") {
    return "no >:(";
  }
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "×":
      return x * y;
    case "÷":
      return x / y;
    default:
      return "undefined";
  }
}

function isOperator(char) {
  if (char === "+" || char === "-" || char === "×" || char === "÷") {
    return true;
  }
  return false;
}

decimal.addEventListener("click", () => {
  const lastChar = output.textContent[output.textContent.length - 1];
  const isLastCharNumeric = !isNaN(parseInt(lastChar));
  const isLastCharOperator = isOperator(lastChar);

  if (isLastCharNumeric || isLastCharOperator) {
    output.textContent += ".";
  }
});

backspace.addEventListener("click", () => {
  output.textContent = output.textContent.substring(
    0,
    output.textContent.length - 1
  );
});

clear.addEventListener("click", () => {
  output.textContent = "";
});
