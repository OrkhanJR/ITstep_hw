const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const length = arr.length;

for (let i = 0; i < arr.length / 2; ++i) {
  const reverse = arr[i];
  arr[i] = arr[length - i - 1];
  arr[length - i - 1] = reverse;
}

console.log(arr);