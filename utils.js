function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isEven(num) {
  return num % 2 === 0;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function exampleAsync() {
  console.log("Waiting...");
  await delay(1000);
  console.log("Done!");
}

module.exports = {
  sum,
  multiply,
  formatName,
  isEven,
  delay,
  exampleAsync,
};
