console.clear();

function getPrototypeChain(obj) {
  const prototypeChain = [];

  while (obj !== null) {
    prototypeChain.push(obj);
    obj = Object.getPrototypeOf(obj);
  }

  return prototypeChain;
}

const myObject = {};
const chain = getPrototypeChain(myObject);

for (const obj of chain) {
  console.log(obj);
}

console.log(null);
