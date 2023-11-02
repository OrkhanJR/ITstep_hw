while (true) {
    const userInput = prompt('Введите текст (для выхода введите "exit"):');
  
    if (userInput.toLowerCase() === "exit") {
      break;
    }
  
    let reversedString = "";
  
    for (let i = userInput.length - 1; i >= 0; i--) {
      const char = userInput[i];
      reversedString +=
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }
  
    console.log(`${userInput} -> ${reversedString}`);
  }