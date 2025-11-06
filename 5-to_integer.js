// This script converts the first command-line argument to an integer
// and prints it, or prints "Not a number" if conversion fails or if no argument is provided.

const arg = process.argv[2];

const num = parseInt(arg);
if (!Number.isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}