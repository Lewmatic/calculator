const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("click");
    setTimeout(() => {
      button.classList.remove("click");
    }, 80);
  });
});
