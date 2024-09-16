
// Step 1.
// Using `if` and `else` to handle two possible conditions
let weather = 'sunny';

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)
} else {
  console.log("Enjoy the sunshine!"); // Expected output: "Enjoy the sunshine!"
}

// Step 2.
// Expanding the logic with `else if`
weather = 'cloudy';

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)
} else if (weather === 'cloudy') {
  console.log("It might rain, take a jacket!"); // Expected output: "It might rain, take a jacket!"
} else {
  console.log("Enjoy the sunshine!"); // Expected output: (This will not print because the `else if` is true)
}

// Step 3. 
// Order Matters: Switching else and else if statements
// weather = 'cloudy';

// if (weather === 'rainy') {
//   console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)
// } else {
//   console.log("Enjoy the sunshine!"); // Expected output: "Enjoy the sunshine!"
// } else if (weather === 'cloudy') {
//   console.log("It might rain, take a jacket!"); // Expected output: SyntaxError: Unexpected token 'else'
// }

// Step 4.
// Full example using `if`, `else if`, and `else` statements
let grade = 85; // Grade out of 100

if (grade >= 90) {
  console.log("Excellent! You got an A."); // Expected output: (This will not print because the condition is false)
} else if (grade >= 80) {
  console.log("Good job! You got a B."); // Expected output: "Good job! You got a B."
} else if (grade >= 70) {
  console.log("You passed with a C."); // Expected output: (This will not print because an `else if` is true)
} else if (grade >= 60) {
  console.log("You passed with a D."); // Expected output: (This will not print because an `else if` is true)
} else {
  console.log("You didn't pass this time. Keep trying!"); // Expected output: (This will not print because an `else if` is true)
}