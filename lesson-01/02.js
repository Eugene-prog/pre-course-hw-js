// code
let number1 = Math.floor(Math.random() * 100);

if (number1 % 2 === 0) {
  console.log(`[${number1}]:Это четное число`);
} else {
   console.log(`[${number1}]:Это нечетное число`);  
}  

let number = 1;

console.log(number); // 1
++number;
number++;
console.log(number); // 3

console.log(number); // 3

number--;
--number;
console.log(number); // 1