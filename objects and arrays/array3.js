const targetObj = {
    field1: "field1",
    field2: "field2",
    field3: "field3",
  };
  
  const fielsdInObj = [];
  const fieldsNotInObj = [];
  
  for (i = 0; i < 10; ++i) {
    const userInput = prompt("Type fields");
  
    if (userInput in targetObj) {
      fielsdInObj.push(userInput);
    } else {
      fieldsNotInObj.push(userInput);
    }
  }
  
  console.log("Fields in obj is: ", fielsdInObj);
  console.log("fields not in obj is: ", fieldsNotInObj);