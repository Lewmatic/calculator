const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const output = document.getElementById("output-value");
const equals = document.getElementById("equals");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear-button");
const decimal = document.getElementById("decimal");

let firstOperand = "";
let operator = "";
let lastOperand = "";

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("click");
    setTimeout(() => {
      button.classList.remove("click");
    }, 80);
    output.textContent += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "") {
      firstOperand = output.textContent;
      operator = button.textContent;
      output.textContent += button.textContent;
    }
  });
});

equals.addEventListener("click", () => {
  if (operator !== "" && output.textContent !== "") {
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
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "×":
      return x * y;
    case "÷":
      return x / y;
  }
}

decimal.addEventListener("click", () => {
  output.textContent += ".";
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
