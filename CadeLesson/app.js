const button = document.querySelector(".silly");

button.addEventListener("click", () => {
  if (button.textContent == "sup") {
    button.textContent = "lup";
  } else if (button.textContent == "lup") {
    button.textContent = "sup";
  }
});
