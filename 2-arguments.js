// This script checks the number of arguments passed to it when executed via Node.js
// and prints a corresponding message.

const numberOfArguments = process.argv.length - 2;

if (numberOfArguments === 0) {
  console.log("No argument");
} else if (numberOfArguments === 1) {
  console.log("Argument found");
} else {
  // This condition covers 2 or more arguments (numberOfArguments > 1)
  console.log("Arguments found");
}