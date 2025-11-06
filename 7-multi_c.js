const arg = process.argv[2];
const n = parseInt(arg, 10);

if (isNaN(n)) {
  console.log("Missing number of occurrences");
} else {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += "C is fun\n";
  }
  if (out) console.log(out.trimEnd());
}