const newSrtingLength = 7;
const characters = 'qwertyuiopasdfghjklzxcvbnm123456789';
let randomString = '';

for (let i = 0; i < newSrtingLength; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomString += characters.charAt(randomIndex);
}

console.log(randomString);