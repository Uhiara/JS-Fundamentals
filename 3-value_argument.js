// This script prints the first command-line argument passed to it.
// If no argument is present, it prints "No argument".

const firstArg = process.argv[2];

if (firstArg) {
  console.log(firstArg);
} else {
  console.log("No argument");
}