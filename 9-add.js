function add(a, b) {
  return Number(a) + Number(b);
}

const a = process.argv[2];
const b = process.argv[3];

if (a === undefined || b === undefined) {
  console.log(NaN);
} else {
  console.log(add(a, b));
}