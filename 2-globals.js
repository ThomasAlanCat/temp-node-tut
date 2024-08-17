// GLOBALS - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - filename
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log("dirname: ", __dirname);
console.log("filename: ", __filename);
// console.log("require: ", require);
// console.log("module: ", module);
// console.log("process: ", process);
let x = 0;
setInterval(() => {
  x++;
  console.log("Hello World", x);
}, 1000);
