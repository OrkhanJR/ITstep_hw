const button = document.querySelector("button");
const listeners = [];

for (let i = 1; i <= 10; ++i) {
  listeners.push(() => console.log(`слушатель ${i}`));
}

button.addEventListener("click", function() {
  let userInput;
  do {
    userInput = prompt("Введите число от 1 до 10:");
    userInput = parseInt(userInput);
  } while (isNaN(userInput) || userInput < 1 || userInput > 10);

  for (let i = 0; i < userInput; ++i) {
    listeners[i]();
  }
});
