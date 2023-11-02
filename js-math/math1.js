const myArray = [1, 2, 3, 4, 5];

if (myArray.length === 0) {
  console.log("Массив пустой");
} else {
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const randomValue = myArray[randomIndex];
  console.log(randomValue);
}