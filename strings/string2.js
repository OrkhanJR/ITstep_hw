const obj = {
    name: 'Alex',
    surName: 'Max',
    AGE: 40,
  };
  
  while (true) {
    const userInput = prompt('Введите название поля (для выхода введите "exit"):');
    
    if (userInput.toLowerCase() === 'exit') {
      break;
    }
    
    const userInputLower = userInput.toLowerCase();
    let found = false;
    
    for (const key in obj) {
      if (key.toLowerCase() === userInputLower) {
        found = true;
        break;
      }
    }
    
    console.log(`${userInput} -> ${found}`);
  }
  