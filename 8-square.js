const arg = process.argv[2];
const n = parseInt(arg, 10);

if (isNaN(n)) {
  console.log("Missing size");
} else if (n > 0) {
  const line = "X".repeat(n);
  for (let i = 0; i < n; i++) {
    console.log(line);
  }
}