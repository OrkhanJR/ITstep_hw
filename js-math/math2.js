const arr = [1, 5, 3, 8, 2];

let maxNumber = -Infinity;

if (arr.length === 0) {
  maxNumber = -Infinity;
} else {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
}

console.log(maxNumber);