function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const arg = process.argv[2];
const num = Number(arg);

if (isNaN(num)) {
  console.log(1);
} else {
  const n = parseInt(num, 10);
  console.log(factorial(n));
}