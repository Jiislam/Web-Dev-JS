var number = [78,52,35,64,58,79];
number.push(63);

console.log(number);
number.pop();
console.log(number);
var seePopped = number.pop();
console.log(seePopped);
// pop removes the last element

number.shift();
number.unshift(87);
console.log(number);

//. shift removes the firt element

// push add an element to the last, unshift adds an element first of the array