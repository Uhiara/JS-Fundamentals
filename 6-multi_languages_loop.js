// This script prints three lines using an array, a loop, and only one console.log call.
// Constraints: No var, no if/else.

const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

let output = "";
let i = 0;

while (i < languages.length) {
  output += languages[i] + "\n";
  i++;
}

console.log(output);