const buttons = document.querySelectorAll("button");
const output = document.getElementById("output-value");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("click");
    setTimeout(() => {
      button.classList.remove("click");
    }, 80);

    if (
      button.textContent !== "AC" &&
      button.textContent !== "C" &&
      button.textContent !== "=" &&
      button.textContent !== "+" &&
      button.textContent !== "-" &&
      button.textContent !== "×" &&
      button.textContent !== "÷"
    ) {
      output.textContent += button.textContent;
    }
  });
});


