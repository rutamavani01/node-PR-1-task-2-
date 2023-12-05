const calculator = require('./views/cal');

let a = 10 , b = 20;

console.log("Addition of 10 & 20 is : "+calculator.add(a,b));

console.log("Substration of 10 & 20 is: "+calculator.sub(a,b));

console.log("Multiplication of 10 & 20 is: "+calculator.mul(a,b));

console.log("Division of 10 & 20 is: "+calculator.div(a,b));

console.log("Modulus of 10 & 20 is: "+calculator.mod(a,b));