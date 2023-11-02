const numbers = [1, 2, 2, 3, 3, 1, 4, 'hi', 'hi'];

const counts = {};
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (counts[num] === undefined) {
    counts[num] = 1;
  } else {
    counts[num]++;
  }
}
for (const num in counts) {
  console.log(num + " -> " + counts[num]);
}