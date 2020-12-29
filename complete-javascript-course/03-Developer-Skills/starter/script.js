// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  const stringy = `${arr[0]}°C in 1 days ... ${arr[1]} in 2 days ... ${arr[2]} in 3 days ... `;
  return stringy;
};

console.log(testData1[0]);
const dog = printForecast(testData1);
console.log(dog);
