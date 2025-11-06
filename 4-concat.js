// This script takes two command-line arguments and prints them
// concatenated with " is " in between. If arguments are missing, 
// they default to 'undefined'.

const arg1 = process.argv[2];

const arg2 = process.argv[3];

console.log(`${arg1} is ${arg2}`);